import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledSvg = styled.svg`
  cursor: pointer;

  path {
    fill: ${({ isNavClicked, theme }) =>
      isNavClicked ? "white" : theme.color.primary};
  }
`;
export const HamburgerButtonSvg = styled(({ className, onClick }) => {
  const isNavClicked = useSelector((state) => state.isNavClicked);

  return (
    <StyledSvg
      className={className}
      isNavClicked={isNavClicked}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="27.5"
      height="15.278"
      viewBox="0 0 27.5 15.278"
    >
      <path
        id="패스_28"
        data-name="패스 28"
        d="M3,18.167H30.5V15.111H3Zm0,6.111H30.5V21.222H3ZM3,12.056H30.5V9H3Z"
        transform="translate(-3 -9)"
      />
    </StyledSvg>
  );
})``;
