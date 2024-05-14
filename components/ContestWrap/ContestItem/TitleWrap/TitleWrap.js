import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";

const SinchonColor = css`
  color: #009d3e;
`;
const BoldText = css`
  font-weight: 700;
`;
const KeepCalmPreset = css`
  font-family: "KeepCalmMed";
  font-weight: 400;
`;

const Title = styled.h1`
  ${KeepCalmPreset}
  ${SinchonColor}
    font-size: 2.6em;
  letter-spacing: -0.08rem;

  line-height: 1.2;

  margin: 0;
  @media (max-width: 470px) {
    font-size: 2.6rem;
  }
  @media (max-width: 400px) {
  }
`;

const SubTitle = styled.p`
  ${SinchonColor}

  margin: 0.4rem 0 3rem 0;

  @media (max-width: 470px) {
    font-size: 1rem;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const TitleWrap = styled(({ className, title, pageType, year, season }) => {
  const [subTitle, setSubTitle] = useState();

  useEffect(() => {
    if (!pageType) return;

    if (pageType === "suapc")
      setSubTitle(
        <SubTitle css={BoldText}>
          {year} 신촌지역 대학교 <br className="show-if-small" />
          프로그래밍 동아리 <br className="show-if-mobile" />
          연합 {season === "Winter" ? "겨울" : "여름"} 대회
        </SubTitle>,
      );
    else if (pageType === "campcontest")
      setSubTitle(
        <SubTitle css={BoldText}>
          {year} {season === "Winter" ? "겨울" : "여름"} 신촌지역 대학교
          프로그래밍 동아리 연합 알고리즘 캠프 콘테스트
        </SubTitle>,
      );
    else if (pageType === "halloffame")
      setSubTitle(
        <SubTitle css={BoldText}>
          {year} {season === "Winter" ? "겨울" : "여름"} 신촌지역 대학교
          프로그래밍 동아리 연합
        </SubTitle>,
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, season]);

  return (
    <div className={className}>
      <Title>{title}</Title>
      {subTitle}
    </div>
  );
})``;

export default TitleWrap;
