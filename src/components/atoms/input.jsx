import styled from "styled-components";
import { colors } from "../../assets/colors";

export function Input(props) {
  const { placeholder, onChangeHandler } = props;
  return <StyledInput placeholder={placeholder} onChange={onChangeHandler} />;
}

export default Input;

const StyledInput = styled.input`
  border: none;
  background: none;
  margin-left: 10px;
  font-size: 16px;
  width: 90%;

  ::-webkit-input-placeholder,
  ::placeholder {
    color: ${colors.grey};
  }

  :focus {
    outline: none;
  }

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;
