interface CloseButtonProps {
    onClick?: () => void;
    btnIcon?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, btnIcon }) =>{
    return(
        <button className="TitleBarButtonsDragAndDrop w-[40px] h-[98%] flex justify-center items-center hover:bg-[#df2121] active:bg-[#c50000] m[2px]" onClick={onClick}>
            <img className="w-[50%] h-[50%]" src={btnIcon} alt={btnIcon} />
        </button>
    )
}

export default CloseButton;