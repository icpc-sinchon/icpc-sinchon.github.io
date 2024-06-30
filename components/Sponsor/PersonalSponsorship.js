import styled, { css } from "styled-components";

const PersonalSponsorship = () => {
  return (
    <div className="main-wrap" style={{ paddingTop: "1.2rem" }}>
      <div className="content-wrap-main">
        <ItemWrap className="slide-up" style={{ animationDelay: "300ms" }}>
          <MainTextTitle>
            <span style={{ letterSpacing: "-0.03rem" }}>ICPC Sinchon</span>을
            도와주실 <br className="show-if-mobile" />
            개인 후원자님을 환영합니다.
          </MainTextTitle>
          <TextSubTitle>
            지금까지의 모든 연합 활동에 후원자님의 후원이 큰 도움이 되었습니다.
            <br />
            캠프 운영을 후원해 주시면 후원 금액에 따라{" "}
            <span css={[SinchonColor, KeepCalmFont]}>ICPC Sinchon</span>에서
            혜택을 제공해드립니다.
          </TextSubTitle>
        </ItemWrap>
        <ImgWrap>
          <img
            className="slide-up"
            src="/res/personalSponsor.png"
            alt="dev-community-stickers"
            style={{ animationDelay: "500ms" }}
          />
        </ImgWrap>

        <ItemWrap
          className="slide-up"
          style={{ marginTop: "1rem", animationDelay: "700ms" }}
        >
          <TextTitle>다음과 같은 혜택을 제공합니다.</TextTitle>

          <ul>
            <li>신촌 연합 공식 홈페이지 SUAPC 섹션 개인 후원 명단에 기록</li>
          </ul>
          <TextSubTitle>10만원 이상</TextSubTitle>
          <ul>
            <li>
              기본 + SUAPC 2024 Winter 대회 스트리밍 세션에서 후원자 명단에 언급
            </li>
          </ul>
          <TextSubTitle>20만원 이상</TextSubTitle>
          <ul>
            <li>기본 + 10만원 옵션 + 문제에 백준 핸들 또는 이름 언급 </li>
          </ul>
          <TextSubTitle>30만원 이상</TextSubTitle>
          <ul>
            <li>기본 + 10만원 옵션 + 대회 특별상에 언급 </li>
          </ul>
        </ItemWrap>

        <ItemWrap
          className="slide-up"
          style={{ marginTop: "2rem", animationDelay: "700ms" }}
        >
          <TextTitle>다음의 계좌로 후원금을 받고 있습니다.</TextTitle>
          <TextSubTitle>79798752726 카카오뱅크 (예금주 : 김예송) </TextSubTitle>
        </ItemWrap>

        <ItemWrap
          className="slide-up"
          style={{ marginTop: "2rem", animationDelay: "700ms" }}
        >
          <TextTitle>후원 후 다음의 폼을 작성해주세요.</TextTitle>
          <TextSubTitle>
            원활한 특전 제공을 위해 아래의 폼을 작성하여 제출해주시길 바랍니다.
          </TextSubTitle>
          <a
            href="https://forms.gle/zTBdraCHA2J4PpVx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://forms.gle/zTBdraCHA2J4PpVx5
          </a>
        </ItemWrap>

        <ItemWrap
          className="slide-up"
          style={{ marginTop: "4rem", animationDelay: "1300ms" }}
        >
          <TextTitle>언제든지 ICPC Sinchon과 함께하세요.</TextTitle>
          <TextSubTitle>
            좋은 마음으로 후원에 함께해주시는 만큼 ICPC Sinchon도 행사 개최에
            최선을 다할 것을 약속드립니다.
            <br />
            관련 문의는 <span className="email" />
            으로 연락주시면 감사드리겠습니다.
          </TextSubTitle>
        </ItemWrap>
      </div>
    </div>
  );
};

const SinchonColor = css`
  color: #009d3e;
`;
const KeepCalmFont = css`
  font-family: "KeepCalmMed";
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

export default PersonalSponsorship;
