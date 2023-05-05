import React from 'react';
import styled from 'styled-components';
import { StTextInput } from '../../pages/user/UserStyled';
import Text from '../Text';
import { HiOutlineMail } from 'react-icons/hi';

export const SignUpTextInput = ({
  type,
  value,
  placeholder,
  onChange,
  innerText,
  height,
  minlength,
  maxlength,
}) => {
  return (
    <StTextInput height={height}>
      <Text shape="T14_700" color="var(--blue_004)">
        {innerText}
      </Text>
      <StInput
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minlength={minlength}
        maxlength={maxlength}
      />
    </StTextInput>
  );
};

const StInput = styled.input`
  display: block;
  width: 400px;
  margin: 0px;
  height: 50px;
  padding: 0 10px;
  background-repeat: no-repeat;

  outline: none;

  border: 1px solid #a6aebb;
  border-radius: 8px;

  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  color: #a6aebb;

  &::placeholder {
    color: #a6aebb;
  }

  &:focus {
    border: 1px solid #65bab6;
  }
  &:active {
    border: 1px solid var(--blue);
  }
`;
