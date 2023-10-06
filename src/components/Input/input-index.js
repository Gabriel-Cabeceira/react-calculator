import { InputContainer } from "./input-styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}></input>
      </InputContainer>
    );
  }
  
  export default Input;