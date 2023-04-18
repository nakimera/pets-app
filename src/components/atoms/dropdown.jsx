import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import { Pill } from "./pill";
import { ReactComponent as ArrowDown } from "../../assets/icons/chevron-down.svg";

export function Dropdown(props) {
  const { label, options, handleFilter } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [newLabel, setLabel] = useState(label);

  const handleOptionClick = (option) => {
    handleFilter(option);
    setLabel(option);
    setShowOptions(false);
  };

  return (
    <Wrapper>
      <Pill onClick={() => setShowOptions(!showOptions)}>
        {newLabel}
        <ArrowDown />
      </Pill>
      {showOptions && (
        <OptionsWrapper onMouseLeave={() => setShowOptions(false)}>
          {options.map((option, index) => (
            <span key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </span>
          ))}
        </OptionsWrapper>
      )}
    </Wrapper>
  );
}

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
`;

const OptionsWrapper = styled.div`
  border: solid 1px ${colors.grey};
  background: ${colors.white};
  border-radius: 10px;
  position: absolute;
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 2;

  span {
    cursor: pointer;
  }
`;
