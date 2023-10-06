import { ButtonInstance } from './button-styles'

const Button = ({label, onClick, className}) => {
    return (
      <ButtonInstance className={className} onClick={onClick}>
        {label}
      </ButtonInstance>
    );
  }
  
  export default Button;