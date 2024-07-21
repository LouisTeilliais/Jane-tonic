import './button.component.css'

export interface ButtonCustomProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, onClick, type = "button" }) => {
    return (
        <button className="login-button" type={type} onClick={onClick}>
            {text}
        </button>
    );
  };

export default ButtonCustom;