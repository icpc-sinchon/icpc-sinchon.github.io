import { useRef } from "react";
import styled, { css } from "styled-components";

const CustomButton = styled.div`
  border: 2px solid #009d3e;

  padding: 0.4rem 1.2rem;

  font-size: 0.8rem;
  font-weight: 700;
  color: #009d3e;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #eeeeee;
      color: #aaaaaa;
      border: none;

      @media (max-width: 766px) {
        background-color: transparent;
      }
    `}

  @media (max-width: 766px) {
    border: none;
    padding: 0.2rem 0;
  }
`;

const ArchiveButton = styled(
  ({ className, href, children, disabled, disabledText }) => {
    const customButtonRef = useRef(null);
    if (disabled) {
      return (
        <CustomButton
          className={className}
          ref={customButtonRef}
          disabled={disabled}
        >
          {children}
        </CustomButton>
      );
    }
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        <CustomButton>{children}</CustomButton>
      </a>
    );
  },
)`
  margin-left: 1.2rem;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 766px) {
    margin-left: 0;
  }
`;

export default ArchiveButton;
