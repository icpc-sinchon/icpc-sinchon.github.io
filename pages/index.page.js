import Head from "next/head";
import styled, { css } from "styled-components";

import Layout from "../components/Layout";

const Main = () => {
  return (
    <Layout>
      <Head>
        <title>Main | ICPC Sinchon</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="Main | ICPC Sinchon" />
        <meta property="og:url" content="https://icpc-sinchon.io/" />
        <meta
          property="og:description"
          content="신촌지역 대학교 프로그래밍 동아리 연합"
        />
        <meta property="og:image" content="/res/og_image.png" />
      </Head>
      <img
        src="/res/hero-background.svg"
        alt="hero-background"
        css={css`
          width: 1521px;
          height: 355px;

          position: fixed;
          left: 0;
          top: -33px;

          zoom: 2.7;

          pointer-events: none;
          z-index: -1;
        `}
      />
      <MainWrap className="main-wrap">
        <ContentWrap className="fade-in">
          <HeroCatchPhrase>
            <img src="/res/lightbulb.png" alt="lightbulb-emoji" />
            THINK <br />
            DIFFERENT
            <img src="/res/lightning.png" alt="lightbulb-emoji" />
          </HeroCatchPhrase>
          <TextSubTitle>
            <span
              css={css`
                letter-spacing: -1px;
              `}
            >
              ICPC Sinchon
            </span>{" "}
            에서 끝도 없이 넘치는 알고리즘 사고력을 길러보세요
          </TextSubTitle>
        </ContentWrap>
        <ContentWrap
          css={css`
            display: flex;
            justify-content: space-between;

            gap: 2.4rem;

            margin-top: 6.4rem !important;

            @media ${(props) => props.theme.device.sm_md} {
              gap: 0;
              flex-wrap: wrap;
            }
          `}
          className="fade-in"
        >
          {/* <ContentItem className="ContentItem">
            <ContentText>
              서강대학교, 숙명여자대학교, 연세대학교, 이화여자대학교, 홍익대학교
              프로그래밍 동아리의 연합 동아리로, 각 학교 컴퓨터공학과 전공생
              180명으로 구성되어 있습니다. 2020년 겨울부터 활동을 시작하여 매
              시즌 정기적인 활동을 이어 나가고 있습니다.
            </ContentText>
          </ContentItem> */}
          <ContentItem className="ContentItem">
            <SchoolWrap>
              <SchoolItem>
                <a href="https://icpc.team" target="_blank" rel="noreferrer">
                  <img src="/school-logo/sogang.png" alt="sogang-univ-logo" />
                  <h4>
                    Sogang
                    <br />
                    ICPC Team
                  </h4>
                </a>
              </SchoolItem>
              <SchoolItem>
                <img
                  src="/school-logo/sookmyung.png"
                  alt="sookmyung-univ-logo"
                />
                <h4>Algos</h4>
              </SchoolItem>
              <SchoolItem>
                <img src="/school-logo/yonsei.png" alt="yonsei-univ-logo" />
                <h4>Molgorithm</h4>
              </SchoolItem>
              <SchoolItem>
                <img src="/school-logo/ewha.png" alt="ewha-univ-logo" />
                <h4>EDOC</h4>
              </SchoolItem>
              <SchoolItem>
                <a href="https://hi-arc.org" target="_blank" rel="noreferrer">
                  <img src="/school-logo/hongik.png" alt="hongik-univ-logo" />
                  <h4>HI-ARC</h4>
                </a>
              </SchoolItem>
            </SchoolWrap>
          </ContentItem>
        </ContentWrap>
        <Hr />
        <ContentWrap
          className="fade-in"
          css={css`
            text-align: center;
          `}
        >
          <img
            src="/res/ferris-wheel.gif"
            alt="ferris-wheel"
            css={css`
              width: 4rem;
              margin: 0 auto;
            `}
          />
          <div
            css={css`
              font-weight: 700;
              font-size: 1.8rem;
              letter-spacing: -0.04em;

              margin-bottom: 0.6rem;
            `}
          >
            신촌을 알고리즘 축제밭으로
          </div>
          <span
            css={css`
              display: inline-block;
              max-width: 56vw;

              margin: 0 auto;

              line-height: 1.6;
              word-break: keep-all;
            `}
          >
            매 시즌마다 알고리즘 행사를 개최합니다.
            <br />
            참가자들의 개인적인 성장을 돕는 Algorithm Camp와 Algorithm Seminar,
            <br />
            그리고 친구들과 팀을 이루어 경쟁하는 SUAPC까지.
          </span>
        </ContentWrap>
        <Hr />
        <ContentWrap
          className="fade-in"
          css={css`
            text-align: center;
          `}
        >
          <img
            src="/res/direct-hit.gif"
            alt="direct-hit"
            css={css`
              width: 4rem;
              margin: 0 auto;
            `}
          />
          <div
            css={css`
              font-weight: 700;
              font-size: 1.8rem;
              letter-spacing: -0.04em;

              margin-bottom: 0.6rem;
            `}
          >
            최고의 목표를 지항하며
          </div>
          <span
            css={css`
              display: inline-block;
              max-width: 56vw;

              margin: 0 auto;

              line-height: 1.6;
              word-break: keep-all;
            `}
          >
            국제 대학생 프로그래밍 대회 ICPC에서 우수한 성적을 거두는 것을
            목표로 하고 있습니다. <br />
            신촌 최고의 대회 SUAPC로 함께 대비합니다.
          </span>
        </ContentWrap>
        <ContentWrap
          className="fade-in"
          css={css`
            margin-top: 4.8rem;

            position: relative;

            padding: 1.6rem 2.4rem;

            border: 0.3px solid #b3b3b3;
            border-radius: 1.8rem;
          `}
        >
          <div
            css={css`
              font-weight: 700;
              font-size: 1.8rem;
              letter-spacing: -0.04em;

              margin-bottom: 0.6rem;
            `}
          >
            <img
              src="/res/raising-hands.svg"
              alt="raising-hands"
              css={css`
                width: 3.2rem;

                margin-bottom: 0.4rem;
              `}
            />
            같이 공부해요!
          </div>
          <span
            css={css`
              line-height: 1.6;

              word-break: keep-all;
            `}
          >
            함께 성장하고 싶은 학회원들을 모집하고 있습니다.
            <br />매 시즌마다 진행되는 ICPC Sinchon 활동에 참여하기를 원한다면
            각 학교 학회의 학회장에게 문의해주세요.
          </span>
        </ContentWrap>
      </MainWrap>
    </Layout>
  );
};

const MainWrap = styled.div`
  padding: 2rem 0;
`;

const ContentWrap = styled.div`
  margin-left: 5.2rem;
  margin-right: 5.2rem;

  @media ${(props) => props.theme.device.sm_md} {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
  }

  & + * {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

const HeroCatchPhrase = styled.span`
  font-weight: 900;
  font-size: 4.2rem;
  line-height: 1;

  color: ${(props) => props.theme.color.primary};

  position: relative;

  img {
    position: absolute;

    width: 4.2rem;

    &:nth-of-type(1) {
      transform: translateX(-100%);
    }
    &:nth-of-type(2) {
      right: 0;
      transform: translate(100%, -100%);
    }

    @media ${(props) => props.theme.device.sm_md} {
      display: none;
    }
  }

  @media ${(props) => props.theme.device.sm} {
    font-size: 12.4vw;
  }
`;

const TextSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.primary};

  margin-top: 0.4rem;
`;

const ContentItem = styled.div`
  width: 100%;
`;

const SchoolWrap = styled.div`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;

  gap: 0.8rem 2.4rem;
`;

const zoomInOnHover = css`
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.14);
  }
`;

const SchoolItem = styled.div`
  ${zoomInOnHover}

  img {
    height: 3.6rem;

    margin: 0 auto;
  }

  h4 {
    font-size: 0.7rem;
    font-weight: 500;

    text-align: center;

    line-height: 1.2;
  }

  @media (max-width: 390px) {
    img {
      height: 3.3rem;
    }
  }
  @media (max-width: 370px) {
    img {
      height: 3rem;
    }
  }
  @media (max-width: 360px) {
    h4 {
      font-size: 0.65rem;
    }
  }
`;

const Hr = styled.hr.attrs({
  className: "fade-in",
})`
  width: 16%;
  @media ${(props) => props.theme.device.sm_md} {
    width: 24%;
  }

  height: 0.2px;

  background: #b3b3b3;

  border: 0;
  border-radius: 20rem;
`;

export default Main;
