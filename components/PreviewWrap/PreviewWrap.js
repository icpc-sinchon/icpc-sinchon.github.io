import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const PreviewWrap = () => {
  const currentSeasonIdx = useSelector((state) => state.currentSeasonIdx);
  const seasonList = useSelector((state) => state.seasonList);

  const showLeftPreview = currentSeasonIdx !== 0;
  const showRightPreview = currentSeasonIdx !== seasonList.length - 1;

  return (
    <>
      <LeftPreview
        className={"preview-container left-preview fade-in"}
        css={!showLeftPreview ? VisibilityHide : ""}
      />
      <RightPreview
        className={"preview-container right-preview fade-in"}
        css={!showRightPreview ? VisibilityHide : ""}
      />
    </>
  );
};

export default PreviewWrap;

const Common = css`
  height: 100%;
  margin: 0 auto 3rem auto;
  padding: 3rem 0;

  border: 3px solid #009d3e;

  @media (max-width: 2300px) {
    width: calc((100% - 1043px - 260px - 57px - 57px) / 2);
  }

  @media (max-width: 1522px) {
    ${"" /* display: none; */}
  }
`;
// 1522px 마지노선
const LeftPreview = styled.div`
  position: absolute;
  left: calc(50% - 520px - 130px - 57px);
  transform: translateX(-100%);

  width: calc(1150px - 520px - 130px - 57px);

  ${Common}
  border-left: none;
`;

const RightPreview = styled.div`
  position: absolute;
  right: calc(50% - 520px - 130px - 57px);
  transform: translateX(+100%);

  width: calc(1150px - 520px - 130px - 57px);

  ${Common}
  border-right: none;
`;

const VisibilityHide = css`
  visibility: hidden;
`;
