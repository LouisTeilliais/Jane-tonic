import './text-field.component.css'

export interface TextFieldProps {
    label: string
    placeholder: string
    type: string
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly?: boolean
}

const TextField = ({ label, placeholder, type, value, onChange, readonly }: TextFieldProps) => {
  return (
    <div className="text-field">
      {label && <label className="text-field-label">{label}</label>}
        <input 
            className="text-field-input" 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            readOnly={readonly}
            disabled={readonly}
          />
    </div>
  );
};

export default TextField;
