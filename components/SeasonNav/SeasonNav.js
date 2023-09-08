import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const SeasonNav = ({ onSeasonNavClick }) => {
  const seasonList = useSelector((state) => state.seasonList);
  const currentSeasonIdx = useSelector((state) => state.currentSeasonIdx);
  return (
    <SeasonNavWrap>
      {seasonList.map((elem, idx) => {
        return (
          <SeasonNavElem
            key={"season-nav-" + elem}
            onClick={onSeasonNavClick}
            alt={idx}
            className={
              "season-nav " +
              (idx === currentSeasonIdx ? "season-selected" : "")
            }
          >
            {" "}
            {elem}
          </SeasonNavElem>
        );
      })}
    </SeasonNavWrap>
  );
};

const KeepCalmPreset = css`
  font-family: "KeepCalmMed";
  font-weight: 400;
`;

const SeasonNavWrap = styled.div`
  padding: 1rem 0 2rem 0;

  display: flex;

  white-space: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 1rem 0 0rem 0;
  }
`;

const SeasonNavElem = styled.div`
  height: 2rem;
  line-height: 2rem;

  padding: 0 1rem;
  margin-left: 2.3rem;
  border-radius: 1rem;

  ${KeepCalmPreset}
  color: #C8C8C8;
  font-size: 0.85rem;
  cursor: pointer;

  &:first-child {
    margin-left: 3.2rem;
  }

  @media (max-width: 500px) {
    &:first-child {
      margin-left: 1.2rem;
    }
    margin-left: 0.5rem;
  }
`;

export default SeasonNav;
