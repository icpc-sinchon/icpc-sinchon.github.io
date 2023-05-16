import { forwardRef } from "react";
import styled, { css } from "styled-components";

const CustomButton = styled.div`
  ${"" /* border: 2px solid #009D3E; */}

  padding: 0.4rem 1.2rem;

  font-size: 0.8rem;
  font-weight: 700;
  ${({ isDeprecated }) =>
    isDeprecated
      ? css`
          background-color: #808080;
        `
      : css`
          background-color: #009d3e;
        `}
  color:white;
`;

const ATag = styled.a`
  margin-left: 1.2rem;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    text-decoration: none;
  }
`;

const AdmissionButton = forwardRef(({ href, isDeprecated, children }, ref) => {
  return (
    <ATag href={href} target="_blank">
      <CustomButton isDeprecated={isDeprecated} ref={ref}>
        {children}
      </CustomButton>
    </ATag>
  );
});

export default AdmissionButton;
