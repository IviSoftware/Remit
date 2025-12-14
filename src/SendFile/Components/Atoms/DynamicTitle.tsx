interface DynamicTitleProps {
    title: String;
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ title }) => {
    return(
        <p className="text-white pl-[5px] text-[18px] z-10">{title}</p>
    )
}

export default DynamicTitle;