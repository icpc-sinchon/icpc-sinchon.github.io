import classNames from "classnames";
import styled, { css } from "styled-components";
import organizer from "../public/history/organizer.json";

const SnsIcons = styled(({ className }) => {
  return (
    <span className={className}>
      <a
        href="https://youtube.com/@icpcsinchonofficial"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/res/footer/youtube.svg" alt="youtube-icon" />
      </a>
      <a
        href="https://instagram.com/icpc_sinchon_official"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/res/footer/instagram.svg" alt="instagram-icon" />
      </a>
      <a href="https://fb.com/icpc-sinchon" target="_blank" rel="noreferrer">
        <img src="/res/footer/facebook.svg" alt="facebook-icon" />
      </a>
      <a href="https://pf.kakao.com/_xehxhAK" target="_blank" rel="noreferrer">
        <img src="/res/footer/talk-gray.svg" alt="kakaotalk-icon" />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a onClick={() => window.open("mailto:icpc.sinchon@gmail.com")}>
        <img src="/res/footer/mail-gray.svg" alt="email-icon" />
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

  /* for mobile */
  @media ${(props) => props.theme.device.sm} {
    scale: 0.7;
    gap: 1rem;
  }
`;

const Logo = styled(({ className }) => {
  return <span className={className}>ICPC Sinchon</span>;
})`
  font-family: "KeepCalmMed";
  font-size: 1.2rem;
  letter-spacing: -0.02rem;
`;

const OrganizerWrap = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  font-size: 0.8rem;
  margin-top: 2rem;
  margin-bottom: 1.8rem;

  word-break: break-all;
  span {
    display: inline-block;
    &::after {
      padding: 0 6px;
      content: "|";
      line-height: 1.75;
    }
  }
`;

const OrgTitle = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  font-size: 0.8rem;
  font-weight: 700;
`;

const Footer = styled(({ className }) => {
  return (
    <footer className={classNames(className, "fade-in")}>
      <Logo />
      <br />
      <p>신촌지역 대학교 프로그래밍 동아리 연합</p>
      <br />
      <OrganizerWrap>
        <OrgTitle>회장</OrgTitle>
        <br />
        <div>
          {organizer[0].president.map((person, idx) => {
            if (idx !== organizer[0].president.length - 1)
              return <span key={idx}>{person.name}</span>;
            else return person.name;
          })}
        </div>
        <br />
        <br />
        <OrgTitle>운영진</OrgTitle>
        <br />
        <div>
          {organizer[0].member.map((person, idx) => {
            if (idx !== organizer[0].member.length - 1)
              return <span key={idx}>{person.name}</span>;
            else return person.name;
          })}
        </div>
      </OrganizerWrap>
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
