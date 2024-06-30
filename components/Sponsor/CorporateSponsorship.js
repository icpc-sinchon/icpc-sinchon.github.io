import styled, { css } from "styled-components";

const CorporateSponsorship = () => {
  return (
    <div className="main-wrap" style={{ paddingTop: "1.2rem" }}>
      <div className="content-wrap-main">
        <ItemWrap className="slide-up" style={{ animationDelay: "300ms" }}>
          <MainTextTitle>
            <span style={{ letterSpacing: "-0.03rem" }}>ICPC Sinchon</span>과
            함께할 <br className="show-if-mobile" />
            후원사를 모집하고 있습니다.
          </MainTextTitle>
          <TextSubTitle>
            지금까지의 모든 연합 활동은 후원사의 후원을 통해 성공적으로 개최될
            수 있었습니다.
            <br />
            참가자에게 제공되는 상금 및 각종 상품들을 제공해주시면,{" "}
            <span css={[SinchonColor, KeepCalmFont]}>ICPC Sinchon</span>은
            참가자들을 상대로 기업에 대한 홍보를 진행합니다.
            <br />매 시즌 신촌지역 5개 대학의 컴퓨터공학 전공생들을 대상으로
            이루어지는 연합 활동의 후원사로 참여하여 기업 홍보 효과를 누리세요.
            <br />
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
          <TextTitle>다음의 후원품들을 제공받고 있습니다.</TextTitle>
          <ul>
            <li>후원금</li>
            <li>컴퓨터 과학 서적</li>
            <li>기업 로고 스티커 및 기념품</li>
            <li>기업 이름을 상 이름으로 한 특별상 상품</li>
          </ul>
        </ItemWrap>
        <ItemWrap className="slide-up" style={{ animationDelay: "900ms" }}>
          <TextTitle>다음과 같은 기업 홍보 방안을 제공합니다.</TextTitle>
          <ul>
            <li>대회 포스터 내 후원사 로고 포함</li>
            <li>후원사 이름 및 서비스와 관련된 대회 문제 출제</li>
            <li>대회 이후 진행되는 스트리밍에서 후원사 홍보 세션 제공</li>
            <li>후원사 기술 커뮤니티 내 대회 결과 보고 관련 게시글 작성</li>
            <li>1등상 혹은 특별상의 이름을 후원사의 이름이 반영되도록 지정</li>
            <li>
              대회 이후 진행되는 스트리밍 화면 하단을 후원사 로고가 보여지도록
              구성
            </li>
            <li>대회 수상자의 개인정보(이름, 나이, 소속 학교) 제공</li>
          </ul>
        </ItemWrap>
        <ItemWrap className="slide-up" style={{ animationDelay: "1100ms" }}>
          <TextTitle>다음과 같은 기업 맞춤 홍보를 진행하고 있습니다.</TextTitle>
          <SponsorWrap>
            <SponsorItem>
              <SponsorImgWrap>
                <img src="/res/sponsor-ci/kakao.png" alt="kakao-logo" />
              </SponsorImgWrap>
              <ul>
                <li>
                  카카오 추천팀 홍보 세션 제공
                  <br />
                  <UnderlinedLink
                    href="https://youtu.be/JS8UKTQ2iW0"
                    target="_blank"
                  >
                    링크
                  </UnderlinedLink>
                </li>
                <li>
                  카카오 관련 대회 문제 출제
                  <br />
                  <UnderlinedLink
                    href="https://www.acmicpc.net/problem/20942"
                    target="_blank"
                  >
                    G번 링크
                  </UnderlinedLink>{" "}
                  &nbsp;
                  <UnderlinedLink
                    href="https://www.acmicpc.net/problem/20943"
                    target="_blank"
                  >
                    H번 링크
                  </UnderlinedLink>
                </li>
                <li>Beyond Kakao를 1등상 명칭으로 사용</li>
                <li>Connect Kakao를 1등상 명칭으로 사용</li>
              </ul>
            </SponsorItem>
            <SponsorItem>
              <SponsorImgWrap>
                <img
                  src="/res/sponsor-ci/autoever.png"
                  alt="hyundai-autoever-logo"
                />
              </SponsorImgWrap>
              <ul>
                <li>
                  현대오토에버 관련 문제 출제
                  <br />
                  {/* <UnderlinedLink
                      href="https://www.acmicpc.net/problem/20937"
                      target="_blank"
                    >
                      B번 링크
                    </UnderlinedLink>{" "} */}
                </li>
                <li>
                  현대오토에버 기업 홍보 세션 제공
                  <br />
                </li>
              </ul>
            </SponsorItem>
            <SponsorItem>
              <SponsorImgWrap>
                <img src="/res/sponsor-ci/naver-d2.png" alt="naver-logo" />
              </SponsorImgWrap>
              <ul>
                <li>
                  네이버 관련 대회 문제 출제
                  <br />
                  <UnderlinedLink
                    href="https://www.acmicpc.net/problem/20937"
                    target="_blank"
                  >
                    B번 링크
                  </UnderlinedLink>{" "}
                  &nbsp;
                  <UnderlinedLink
                    href="https://www.acmicpc.net/problem/20948"
                    target="_blank"
                  >
                    M번 링크
                  </UnderlinedLink>
                </li>
              </ul>
            </SponsorItem>
            <SponsorItem>
              <SponsorImgWrap>
                <img src="/res/sponsor-ci/pubg.png" alt="pubg-logo" />
              </SponsorImgWrap>
              <ul>
                <li>
                  펍지 / 크래프톤 기업 홍보 세션 제공
                  <br />
                </li>
              </ul>
            </SponsorItem>
            <SponsorItem>
              <SponsorImgWrap>
                <img
                  src="/res/sponsor-ci/hello-algo.png"
                  alt="future-tech-academy-logo"
                />
              </SponsorImgWrap>
              <ul>
                <li>
                  퓨처테크아카데미 관련 문제 출제
                  <br />
                </li>
                <li>
                  퓨처테크아카데미 기업 홍보 세션 제공
                  <br />
                </li>
                <li>
                  퓨처테크아카데미 HelloAlgo 를 3등상 명칭으로 사용
                  <br />
                </li>
                <li>
                  연합 학회별 5개 커뮤니티에 멘토 및 연구원 모집 홍보
                  <br />
                </li>
              </ul>
            </SponsorItem>
            <SponsorItem>
              <SponsorImgWrap>
                <img src="/res/sponsor-ci/furiosa.png" alt="furiosa-ai-logo" />
              </SponsorImgWrap>
              <ul>
                <li>
                  퓨리오사 AI 기업 홍보 세션 제공
                  <br />
                </li>
              </ul>
            </SponsorItem>
            <SponsorItem>
              <SponsorImgWrap>
                <img src="/res/sponsor-ci/vuno.png" alt="vuno-logo" />
              </SponsorImgWrap>
              <ul>
                <li>
                  뷰노 기업 홍보 세션 제공
                  <br />
                </li>
              </ul>
            </SponsorItem>
          </SponsorWrap>
        </ItemWrap>
        <ItemWrap className="slide-up" style={{ animationDelay: "1300ms" }}>
          <TextTitle>언제든지 ICPC Sinchon과 함께하세요.</TextTitle>
          <TextSubTitle>
            후원에 함께해주시는 만큼 저희도 후원사 홍보에 최선을 다할 것을
            약속드립니다.
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

const SponsorImgWrap = styled.div`
  width: 12rem;

  img {
    height: 1.8rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`;

const UnderlinedLink = styled.a`
  text-decoration: underline;
`;

const SponsorWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;

  margin-top: 1em;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SponsorItem = styled.div`
  margin: 0.4rem 1rem 0.4rem 0;

  ul {
    margin-top: 0;
  }
`;

export default CorporateSponsorship;
