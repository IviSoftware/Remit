
import DevicesCard from "../Molecules/DevicesCard";

interface Dispositivo {
    disp_name: string;
    ip: string;
    port: number;
    properties: Array<[String, String]>;
}

interface DevicesContainerProps {
    devicesList: Map<string, Dispositivo>;
}

const DevicesContainer: React.FC<DevicesContainerProps> = ({devicesList}) =>{
    return(
        <div className="flex flex-col items-center w-[250px] h-[98%] bg-[#252525] rounded-[5px] ml-[5px]">
            <p className="text-white text-center text-[24px]">Dispositivos</p>
            {Array.from(devicesList.values()).map((device, _) => {
                return <DevicesCard key={device.ip} username={device.ip}/>
            })}
        </div>
    )
}

export default DevicesContainer;