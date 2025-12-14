import LoadFiles from "../Molecules/LoadFiles";
import EditUserName from "../Molecules/EditUserName";

interface FilesContainerProps {
    onClick: () => void;
    username: string;
}

const FilesContainer: React.FC<FilesContainerProps> = ({onClick, username}) => {
    return (
        <div className="flex grow flex-col h-full justify-center items-center">
            <EditUserName onClick={onClick} userName={username} />
            <LoadFiles />
        </div>
    )
}

export default FilesContainer;