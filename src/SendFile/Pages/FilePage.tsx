import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

import DevicesContainer from "../Components/Organisms/DevicesContainer";
import FilesContainer from "../Components/Organisms/FilesContainer";
import Modal from "../Components/Organisms/Modal";

interface Dispositivo {
    disp_name: string;
    ip: string;
    port: number;
    properties: Array<[String, String]>;
}

const FilePage: React.FC = () =>{
    
    const [modalActive, setModalActive] = useState(false);
    const [username, setUsername] = useState("Empty");
    const [devices, setDevices] = useState<Map<string, Dispositivo>>(new Map());

    //Funcion para obtener el nombre del usuario desde rust
    const fetchUserName = async () => {
        try {
            const respuesta = await invoke<string>("user_app");
            setUsername(respuesta);
        } catch (error) {
            console.error("Error al obtener el nombre desde rust:", error);
        }
    }

    //obtener la lista de dispositivos desde rust
    const get_devices_list = async() =>{
            invoke("find_devices");

            const unlistenPromise = listen<Dispositivo>(
                "mdns-device-found",
                (event) => {
                    setDevices(prev => {
                        const next = new Map(prev);
                        next.set(event.payload.ip, event.payload);
                        return next;
                    })
                }
            );

            const unListenRemove = listen<Dispositivo>(
                "mdns-device-removed",
                (event) => {
                    setDevices(prev => {
                        const next = new Map(prev);
                        next.delete(event.payload.ip);
                        return next;
                    })
                }
            );

            return () => {
                unlistenPromise.then(unlisten => unlisten());
                unListenRemove.then(unlisten => unlisten());
            }
        }

    useEffect(() => {
        fetchUserName();
        get_devices_list();
    }, []);

    const handleModal = () =>{
        setModalActive(true);
    }

    const handleModalClose = () =>{
        setModalActive(false);
    }

    return(
        <div className="flex items-center w-full h-full bg-[#161616]">
            <DevicesContainer devicesList={devices}/>
            <FilesContainer onClick={handleModal} username={username}/>
            <Modal ModalActive={modalActive} onClick={handleModalClose} onNameChange={fetchUserName}/>
        </div>
    )
}

export default FilePage;