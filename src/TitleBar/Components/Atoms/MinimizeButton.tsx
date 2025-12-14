interface MinimizeButtonProps {
    onClick?: () => void;
    btnIcon?: string;
}

const MinimizeButton: React.FC<MinimizeButtonProps> = ({ onClick, btnIcon }) => {
    return(
        <button className="TitleBarButtonsDragAndDrop w-[40px] flex justify-center items-center h-[98%] m[2px] hover:bg-[#333] active:bg-[#555]" onClick={onClick}>
            <img className="w-[50%] h-[50%]" src={btnIcon} alt={btnIcon} />
        </button>
    )
}

export default MinimizeButton;