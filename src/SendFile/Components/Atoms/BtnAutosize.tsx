interface BtnAutosizeProps {
    id: string;
    x: string;
    y: string;
    text: string;
    onclick: () => void;
}

const BtnAutosize: React.FC<BtnAutosizeProps> = ({ id, x, y, text, onclick }) => {
    return (
        <button 
        id={id}
        className={`w-[${x}px] h-[${y}px] border border-white rounded-[5px] text-white text-[12px] p-[5px] pl-[15px] pr-[15px]`}
        onClick={() => onclick()}>
            {text}
        </button>
    )
}

export default BtnAutosize;
