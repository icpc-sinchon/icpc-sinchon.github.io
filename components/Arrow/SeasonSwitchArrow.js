import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const SeasonSwitchArrow = ({ onArrowClick }) => {
  const seasonList = useSelector((state) => state.seasonList);
  const currentSeasonIdx = useSelector((state) => state.currentSeasonIdx);

  const showLeftArrow = currentSeasonIdx !== 0;
  const showRightArrow = currentSeasonIdx !== seasonList.length - 1;

  return (
    <ArrowWrap className="arrow-wrap">
      <ArrowLeft
        css={!showLeftArrow ? VisibilityHide : ""}
        onClick={onArrowClick}
        alt="left-arrow"
        src="res/button/arrow-left.svg"
      />
      <ArrowRight
        css={!showRightArrow ? VisibilityHide : ""}
        onClick={onArrowClick}
        alt="right-arrow"
        src="res/button/arrow-right.svg"
      />
    </ArrowWrap>
  );
};

const ArrowWrap = styled.div`
  position: absolute;
  top: 270px;
  left: -130px;

  display: flex;
  justify-content: space-between;

  width: calc(100% + 260px);
`;

const Arrow = css`
  cursor: pointer;
`;
const ArrowLeft = styled.img`
  ${Arrow}
`;

const ArrowRight = styled.img`
  ${Arrow}
`;

const VisibilityHide = css`
  visibility: hidden;
`;

export default SeasonSwitchArrow;
