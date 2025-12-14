import DynamicText from "../Atoms/DynamicText";
import DynamicTitle from "../Atoms/DynamicTitle";

interface InfoBlockProps {
    title: String;
    text: String;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text }) => {
    return(
        <div className="flex center-all w-[60%] p-[5px] mb-[5px] rounded-[5px] z-10">
            <DynamicTitle title={title}/>
            <DynamicText text={text}/>
        </div>
    )
}

export default InfoBlock