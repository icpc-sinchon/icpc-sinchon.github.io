import classNames from "classnames";
import styled, { css } from "styled-components";

const SnsIcons = styled(({ className }) => {
  return (
    <span className={className}>
      <a href="https://fb.com/icpc-sinchon" target="_blank">
        <img src="/res/footer/facebook.svg" />
      </a>
      <a href="https://pf.kakao.com/_xehxhAK" target="_blank">
        <img src="/res/footer/talk-gray.svg" />
      </a>
      <a onClick={() => window.open("mailto:icpc.sinchon@gmail.com")}>
        <img src="/res/footer/mail-gray.svg" />
      </a>
    </span>
  );
})`
  scale: 0.9;
  gap: 1.2rem;

  position: absolute;
  /*top: 0;*/
  top: -0.6rem;
  right: 0;

  display: flex;
  align-items: center;
`;

const Logo = styled(({ className }) => {
  return <span className={className}>ICPC Sinchon</span>;
})`
  font-family: "KeepCalmMed";
  font-size: 1.2rem;
  letter-spacing: -0.02rem;
`;

const Footer = styled(({ className }) => {
  return (
    <footer className={classNames(className, "fade-in")}>
      <Logo />
      <br />
      <p>신촌지역 대학교 프로그래밍 동아리 연합</p>
      <br />
      <p
        css={css`
          /* for mobile */
          @media ${(props) => props.theme.device.sm} {
            line-height: 1.3;
          }
        `}
      >
        04107 서울시 마포구 백범로 35 (신수동) 서강대학교 김대건관(K관) 512호 |
        icpc.sinchon@gmail.com
      </p>
      <p>© ICPC Sinchon. All Rights Reserved.</p>
      <SnsIcons />
    </footer>
  );
})`
  position: relative;
  line-height: 0.7;

  ${(props) => props.theme.main.frame.margin};
  margin-top: 4rem;
  margin-bottom: 1.8rem;

  font-size: 0.8rem;
  color: #5d737e;

  @media ${(props) => props.theme.device.sm} {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
  }
`;

export default Footer;
