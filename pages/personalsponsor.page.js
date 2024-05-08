import Layout from "../components/Layout";
import styled, { css } from "styled-components";
import Head from "next/head";

const SinchonColor = css`
  color: #009d3e;
`;
const ImgWrap = styled.div`
  height: 400px;
  overflow: hidden;

  margin: 1rem 0 4rem 0;

  @media (max-width: 1000px) {
    height: 50vw;
    img {
      height: 50vw;
      max-width: unset;
    }
  }
`;

const PersonalSponsor = () => {
  return (
    <Layout>
      <Head>
        <title>personalSponsor | ICPC Sinchon</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="Sponser | ICPC Sinchon" />
        <meta property="og:url" content="https://icpc-sinchon.io/sponser" />
        <meta
          property="og:description"
          content="매 시즌 신촌지역 5개 대학의 컴퓨터공학 전공생들을 대상으로 이루어지는 연합 활동의 후원사로 참여하여 기업 홍보 효과를 누리세요."
        />
        <meta property="og:image" content="/res/og_image.png" />
      </Head>
      <div className="main-wrap" style={{ paddingTop: "1.2rem" }}>
        <div className="content-wrap-main">
          <ItemWrap className="slide-up" style={{ animationDelay: "300ms" }}>
            <MainTextTitle>
              <span style={{ letterSpacing: "-0.03rem" }}>ICPC Sinchon</span>을
              도와주실 <br className="show-if-mobile" />
              개인 후원자님을 환영합니다.
            </MainTextTitle>
            <TextSubTitle>
              지금까지의 모든 연합 활동에 후원자님의 후원이 큰 도움이
              되었습니다.
            </TextSubTitle>
          </ItemWrap>
          <ImgWrap>
            <img
              className="slide-up"
              src="/res/stickers-3.jpg"
              alt="dev-community-stickers"
              style={{ animationDelay: "500ms" }}
            />
          </ImgWrap>
          <ItemWrap
            className="slide-up"
            style={{ marginTop: "2rem", animationDelay: "700ms" }}
          >
            <TextTitle>다음의 계좌로 후원금을 받고 있습니다</TextTitle>
            <TextSubTitle>123456789</TextSubTitle>
          </ItemWrap>
          <ItemWrap className="slide-up" style={{ animationDelay: "900ms" }}>
            <TextTitle>다음과 혜택을 제공합니다</TextTitle>
            <ul>
              <li>SUAPC 홈페이지 후원사 이름 기재</li>
              <li>드릴 수 있는 게 없어요</li>
            </ul>
          </ItemWrap>

          <ItemWrap className="slide-up" style={{ animationDelay: "1300ms" }}>
            <TextTitle>언제든지 ICPC Sinchon과 함께하세요</TextTitle>
            <TextSubTitle>
              좋은 마음으로 후원에 함께해주시는 만큼 저희도 행사 개최에 최선을
              다할 것을 약속드립니다.
              <br />
              관련 문의는 <span className="email" />
              으로 연락주시면 감사드리겠습니다.
            </TextSubTitle>
          </ItemWrap>
        </div>
      </div>
    </Layout>
  );
};

const ItemWrap = styled.div`
  padding-bottom: 1rem;
`;
const MainTextTitle = styled.h1`
  ${SinchonColor}

  font-family: 'KeepCalmMed', 'Apple SD Gothic Neo';
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 470px) {
    font-size: 1.6rem;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const TextTitle = styled.div`
  ${SinchonColor}

  font-family: 'KeepCalmMed', 'Apple SD Gothic Neo';
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 470px) {
    font-size: 1.1rem;
  }
`;

const TextSubTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

export default PersonalSponsor;
