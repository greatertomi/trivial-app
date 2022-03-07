import React, { FC } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { GREEN_BORDER_COLOR, RED_BORDER_COLOR } from '../../utils/variables';

const OptionContainer = styled.div<{
  type: 'true' | 'false';
  selected?: boolean;
}>`
  width: 100px;
  background-color: #fff;
  margin: 1.2rem 0;
  padding: 1rem;
  font-size: 18px;
  box-shadow: 0 12px 19px rgb(60 128 209 / 9%);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  border-width: 3px;
  border-style: solid;
  border-color: ${({ selected, type }) =>
    !selected
      ? 'white'
      : type === 'true'
      ? GREEN_BORDER_COLOR
      : RED_BORDER_COLOR};

  &:hover {
    border-color: ${({ type }) =>
      type === 'true' ? GREEN_BORDER_COLOR : RED_BORDER_COLOR};
    color: ${({ type }) => (type === 'true' ? '#00973f' : '#b71c1c')};
  }
`;

// FaCheck
interface OptionProps {
  type: 'true' | 'false';
  selected?: boolean;
  onClick: (type: string) => void;
}

const Option: FC<OptionProps> = ({ type, selected = false, onClick }) => {
  return (
    <OptionContainer
      type={type}
      selected={selected}
      onClick={() => onClick(type)}
    >
      {type === 'true' ? (
        <>
          <FaCheck color="#00973f" />
          <p>True</p>
        </>
      ) : (
        <>
          <FaTimes color="#b71c1c" />
          <p>False</p>
        </>
      )}
    </OptionContainer>
  );
};

export default Option;
