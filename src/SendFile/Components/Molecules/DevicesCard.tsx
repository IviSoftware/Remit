import DynamicTitle from "../Atoms/DynamicTitle";

interface DevicesCardProps{
    username: String;
}

const DevicesCard: React.FC<DevicesCardProps> = ({ username }) => {
    return(
        <div className="w-[90%] h-[40px] bg-[#303030] rounded-[5px] mt-[10px] center-v">
           <DynamicTitle title={username}/>
        </div>
    )
}

export default DevicesCard;