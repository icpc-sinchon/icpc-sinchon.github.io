import styled, { css } from "styled-components";
import ItemWrap from "../ItemWrap";

const SinchonColor = css`
  color: #009d3e;
`;
const BoldText = css`
  font-weight: 700;
`;

const ItemTitle = styled.h3`
  ${BoldText}
  ${SinchonColor}

    margin: 1em 0 0.4em 0;
`;

const ItemContent = styled.p`
  font-weight: 500;

  ${({ isUncertain }) =>
    isUncertain &&
    css`
      line-height: 1;
    `}

  margin: 0;
  @media (max-width: 766px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;
const UncertainText = styled.span`
  color: grey;
  font-size: 0.8rem;
`;

const TextWrap = ({ title, content, isUncertain }) => {
  return (
    <ItemWrap>
      <ItemTitle>{title}</ItemTitle>
      <ItemContent isUncertain={isUncertain}>{content}</ItemContent>
      {isUncertain && (
        <UncertainText>
          ※상기 일정은 사정에 따라 변경될 수 있습니다.
        </UncertainText>
      )}
    </ItemWrap>
  );
};

export default TextWrap;
