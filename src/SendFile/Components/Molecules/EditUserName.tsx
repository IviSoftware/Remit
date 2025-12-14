import DynamicTitle from "../Atoms/DynamicTitle";

interface EditUserNameMoleculeProps {
    userName: string;
    onClick?: () => void;
}

const EditUserNameMolecule: React.FC<EditUserNameMoleculeProps> = ({ userName, onClick }) =>{
    return(
        <div className="flex center-all bg-[#252525] w-[60%] p-[5px] mb-[5px] rounded-[5px]">
            <DynamicTitle title={userName}/>
            <button onClick={onClick} className="ml-2.5 border border-white rounded-[3px] h-[30px] pl-[5px] pr-[5px] text-white">EDIT NAME</button>
        </div>
    )
}

export default EditUserNameMolecule;