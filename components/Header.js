import styled, { css } from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { FlexBox } from "./ui/flex-box";
import { HamburgerButtonSvg } from "./hamburger-button-svg";
import { LogoSvg } from "./240-logo-svg";
import { setIsNavClicked } from "../reducers/isNavClicked";

const routes = [
  { title: "SUAPC 2024", href: "/suapc" },
  { title: "Camp Contest", href: "/campcontest" },
  { title: "명예의 전당", href: "/halloffame" },
  { title: "후원 및 협업", href: "/sponsor" },
];

const zoomInOnHover = css`
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.14);
  }
`;

const Logo = styled(LogoSvg)`
  ${zoomInOnHover}

  width: 42px;
  height: 28px;

  cursor: pointer;

  z-index: 1001;

  @media ${(props) => props.theme.device.sm} {
    width: 32px;
  }
`;
const Header = styled(({ className }) => {
  return (
    <header className={className}>
      <Link href="/">
        <FlexBox>
          <Logo />
        </FlexBox>
      </Link>
      <div style={{ flexGrow: "1" }} />
      {routes.map(({ title, href }) => (
        <Link key={title} href={href}>
          <DesktopTopbarItem>{title}</DesktopTopbarItem>
        </Link>
      ))}
      <MobileWindow />
    </header>
  );
})`
  backdrop-filter: blur(1.5rem);
  display: flex;
  align-items: center;

  position: fixed;
  z-index: 1000;
  width: 100%;
  max-width: 1000px;

  height: 75px;
  ${(props) => props.theme.main.frame.padding};

  @media (max-width: 700px) {
    padding: 0 8vw;
  }
`;

const HamburgerButton = styled(HamburgerButtonSvg)`
  display: none;
  z-index: 10002;

  @media ${(props) => props.theme.device.sm} {
    display: block;
  }
`;
const MobileWindow = styled(({ className }) => {
  const dispatch = useDispatch();
  const isNavClicked = useSelector((state) => state.isNavClicked);

  const handleClick = () => {
    dispatch(setIsNavClicked(!isNavClicked));
    document.querySelector("sitemask").classList.toggle("hide");
  };

  return (
    <>
      {isNavClicked && (
        <div className={className}>
          {routes.map(({ title, href }) => (
            <Link key={title} href={href}>
              <MobileTopbarItem onClick={handleClick}>{title}</MobileTopbarItem>
            </Link>
          ))}
        </div>
      )}
      <HamburgerButton onClick={handleClick} />
    </>
  );
})`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  width: 100%;
  height: 190px;
  padding-top: 75px;

  background: ${(props) => props.theme.color.primary};

  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

const DesktopTopbarItem = styled.div`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.02rem;

  padding-left: 2.4rem;

  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }

  &:hover {
    font-weight: 500;
  }

  @media ${(props) => props.theme.device.sm} {
    display: none;
  }
`;

const MobileTopbarItem = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  letter-spacing: -0.02rem;

  text-align: right;

  padding: 0 8vw;

  cursor: pointer;
`;

export default Header;
