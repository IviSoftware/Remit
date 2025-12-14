interface MaximizeButtonProps {
    onClick?: () => void;
    btnIcon?: string;
}

const MaximizeButton: React.FC<MaximizeButtonProps> = ({ onClick, btnIcon }) => {
    return(
        <button className="TitleBarButtonsDragAndDrop w-[40px] h-[98%] flex justify-center items-center hover:bg-[#333] active:bg-[#555] m[2px]" onClick={onClick}>
            <img className="w-[50%] h-[50%]" src={btnIcon} alt={btnIcon} />
        </button>
    )
}

export default MaximizeButton;