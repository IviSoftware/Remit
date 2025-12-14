import InputType from "../Atoms/InputType";

interface InputWithLabelProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({id, label, type, placeholder, value, onChange}) => {
    return(
        <div id={id} className="flex flex-col w-[80%] mb-[10px]">
            <label className="text-white text-[8px]">{label}</label>
            <InputType type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default InputWithLabel;