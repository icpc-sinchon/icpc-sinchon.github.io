import Head from "next/head";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";

const BoldText = css`
  font-weight: 700;
`;
const MainBottom = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 1.6rem 0 1rem 0;
`;

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
      <MainWrap className="main-wrap">
        <ContentWrap className="content-wrap-main fade-in">
          <TextTitle>
            THINK <br />
            DIFFERENT
          </TextTitle>
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
        <MainImageWrap className="fade-in">
          <img
            src="/res/hero-background.svg"
            css={css`
              position: fixed;
              width: 1521px;
              z-index: 100000;
              height: 355px;
              left: 0;
              top: -33px;
              zoom: 2.7;
            `}
          />
        </MainImageWrap>
        <ContentWrap css={MainBottom} className="content-wrap-main fade-in">
          <ContentItem className="ContentItem">
            <ContentTitle>소개</ContentTitle>
            <ContentText>
              안녕하세요 신촌지역 대학교 프로그래밍 동아리 연합입니다.
              서강대학교, 숙명여자대학교, 연세대학교, 이화여자대학교, 홍익대학교
              프로그래밍 동아리의 연합 동아리로, 각 학교 컴퓨터공학과 전공생
              180명으로 구성되어 있습니다. 2020년 겨울부터 활동을 시작하여 매
              시즌 정기적인 활동을 이어 나가고 있습니다.
            </ContentText>
          </ContentItem>
          <ContentItem className="ContentItem">
            <ContentTitle>소속 학교</ContentTitle>
            <SchoolWrap>
              <SchoolItem>
                <img src="https://api.suapc.kr/school-logo/sogang.png" />
                <h4>
                  Sogang
                  <br />
                  ICPC Team
                </h4>
              </SchoolItem>
              <SchoolItem>
                <img src="https://api.suapc.kr/school-logo/sookmyung.png" />
                <h4>Algos</h4>
              </SchoolItem>
              <SchoolItem>
                <img src="https://api.suapc.kr/school-logo/yonsei.png" />
                <h4>Morgorithm</h4>
              </SchoolItem>
              <SchoolItem>
                <img src="https://api.suapc.kr/school-logo/ewha.png" />
                <h4>EDOC</h4>
              </SchoolItem>
              <SchoolItem>
                <img src="https://api.suapc.kr/school-logo/hongik.png" />
                <h4>HI-ARC</h4>
              </SchoolItem>
            </SchoolWrap>
          </ContentItem>
          <ContentItem className="ContentItem ContentItem-PC">
            <ContentTitle>활동</ContentTitle>
            <ContentText>
              매 시즌 프로그래밍 대회{" "}
              <span
                css={css`
                  color: ${(props) => props.theme.color.primary};
                `}
              >
                SUAPC
              </span>
              를 개최하여 팀원과의 협업을 통해 <span>ICPC</span>를 준비할 수
              있는 환경을 제공합니다.
              <br />
              강의 형식의 스터디인{" "}
              <span
                css={css`
                  color: ${(props) => props.theme.color.primary};
                `}
              >
                Algorithm Camp
              </span>
              도 진행하여 연합원들에게 알고리즘 공부의 기회를 제공합니다.
              <br />
              캠프 이후에는{" "}
              <span
                css={css`
                  color: ${(props) => props.theme.color.primary};
                `}
              >
                Camp Contest
              </span>
              를 통해 다른 학회원들과 경쟁하며 본인의 실력을 확인할 수 있는
              모의고사를 치릅니다.
            </ContentText>
          </ContentItem>
          <ContentItem className="ContentItem ContentItem-Tablet">
            <ContentTitle
              style={{ fontFamily: `KeepCalmMed`, fontWeight: `unset` }}
            >
              SUAPC
            </ContentTitle>
            <ContentText>
              매 시즌 프로그래밍 대회를 개최하여 팀원과의 협업을 통해 ICPC를
              준비할 수 있는 환경을 제공합니다.
              <br />
              문제 또한 ICPC 서울 리저널의 경향을 따르며, 제한시간 동안 얼마나
              많은 문제를 정확하게 풀어내는지를 평가하여 순위를 결정합니다.
              <br />
              신촌지역 5개 학교 학부생이라면 누구나 참여 가능합니다.
            </ContentText>
          </ContentItem>
          <ContentItem className="ContentItem ContentItem-Tablet">
            <ContentTitle
              style={{ fontFamily: `KeepCalmMed`, fontWeight: `unset` }}
            >
              Algorithm Camp
            </ContentTitle>
            <ContentText>
              강의 형식의 스터디인{" "}
              <span
                css={css`
                  color: ${(props) => props.theme.color.primary};
                `}
              >
                Algorithm Camp
              </span>
              를 진행하여 연합원들에게 알고리즘 공부의 기회를 제공합니다.
              <br />
              캠프 이후에는{" "}
              <span
                css={css`
                  color: ${(props) => props.theme.color.primary};
                `}
              >
                Camp Contest
              </span>
              를 통해 다른 학회원들과 경쟁하며 본인의 실력을 확인할 수 있는
              모의고사를 치릅니다.
            </ContentText>
          </ContentItem>
        </ContentWrap>
      </MainWrap>
    </Layout>
  );
};

const MainWrap = styled.div`
  padding: 2rem 0;
`;

const ContentWrap = styled.div`
  height: 100%;

  padding: 0 5.2rem;
`;

const TextTitle = styled.div`
  font-family: "Pretendard";
  font-weight: 900;
  font-size: 4.2rem;
  line-height: 1;

  color: ${(props) => props.theme.color.primary};

  &::before {
    content: "💡";
    position: absolute;
    transform: translateX(-100%);
  }
  &::after {
    content: "⚡";
    position: absolute;
  }
`;

const TextSubTitle = styled.div`
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.primary};

  margin-top: 0.4rem;
`;

const MainImageWrap = styled.div`
  width: 100%;
  height: 120px;

  margin: 1.2rem 0 0 0;

  ${"" /* border-top: 1px solid #707070; */}
  ${"" /* border-bottom: 1px solid #707070; */}

    overflow: hidden;

  @media (max-width: 1000px) {
    height: 50vw;
  }
`;

const ContentItem = styled.div`
  width: 100%;
`;

const ContentTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};

  margin: 1em 0 0.4em 0;
`;

const ContentText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;

  line-height: 1.44;
`;

const SchoolWrap = styled.p`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1505px) {
    justify-content: space-evenly;
  }

  @media (max-width: 1135px) {
    justify-content: space-evenly;
  }
`;

const SchoolItem = styled.div`
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

export default Main;
