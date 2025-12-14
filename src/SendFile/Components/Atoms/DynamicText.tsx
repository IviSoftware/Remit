interface DynamicTextProps {
    text: String;
}

const DynamicText: React.FC<DynamicTextProps> = ({ text }) => {
    return(
        <p className="text-white pl-[5px] text-[12px] z-10">{text}</p>
    )
}

export default DynamicText;