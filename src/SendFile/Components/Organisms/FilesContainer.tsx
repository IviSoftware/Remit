import { useEffect, useState } from "react";
import LoadFiles from "../Molecules/LoadFiles";
import EditUserName from "../Molecules/EditUserName";
import { invoke } from "@tauri-apps/api/core";

interface FilesContainerProps {
    onClick: () => void;
    username: string;
}

const FilesContainer: React.FC<FilesContainerProps> = ({onClick, username}) => {

    const [selectedFile, setSelectedFile] = useState<string>("");

    useEffect(() => {
        invoke("ftp_server");
    }, []);

    const handleSendFile = async (fileName: string) => {
        await invoke("ftp_client", {
            filePath: fileName,
        })
    }

    return (
        <div className="flex grow flex-col h-full justify-center items-center">
            <EditUserName onClick={onClick} userName={username} />
            <LoadFiles onFileSelect={setSelectedFile}/>
            <button className="px-5 py-1 mt-5 border border-white rounded-sm"
            onClick={() => { handleSendFile(selectedFile)}}>
                <p className="text-white">Enviar archivos</p>
            </button>
        </div>
    )
}

export default FilesContainer;