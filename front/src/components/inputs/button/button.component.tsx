import './button.component.css'

export interface ButtonCustomProps {
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, onClick }) => {
  return (
      <button className="login-button" type="submit" onClick={onClick}>
          {text}
      </button>
  );
};

export default ButtonCustom;