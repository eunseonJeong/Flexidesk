import React from 'react';
import styled from 'styled-components';
import { globalTypoes } from '../styles/typo';

function IconTitle({ children, src, alt, shape = 'T18_700_22' }) {
  return (
    <StIconTitle>
      <StIcon src={`${process.env.PUBLIC_URL}/img/${src}.png`} alt={alt} />
      <StTitle shape={shape}>{children}</StTitle>
    </StIconTitle>
  );
}

export default IconTitle;

const StIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: ${props => props.margin || '30px 16px'};
`;

const StIcon = styled.img`
  max-width: 100%;
  height: ${props => props.height || 'auto'};
  width: 52px;

  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: url(image.png);
  filter: drop-shadow(0px 8px 40px rgba(140, 159, 157, 0.25));
  border-radius: 8px;
`;

const StTitle = styled.h2`
  ${({ shape }) => {
    return globalTypoes[shape];
  }}
`;
