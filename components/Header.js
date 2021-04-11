import styled, { css } from 'styled-components'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavSVG from '../components/HeaderNavSVG'
import LogoSVG from '../components/HeaderLogoSVG'

const Header = () => {
    const [isNavClicked, setIsNavClicked] = useState(false)

    const onNavClick = () => {
        if (isNavClicked)
            setIsNavClicked(false)
        else
            setIsNavClicked(true)
    }

    const LogoImgWrap = styled.div`
        width: 36px;
        z-index: 10002;

        cursor: pointer;

        @media(max-width: 700px){
            width:32px;
        }
    `

    const NavBarWrap = styled.div`
        display: none;
        z-index: 10002;

        @media(max-width: 500px){
            display: block;
        }
    `

    useEffect(() => {
        document.querySelector("main").addEventListener("click", e => {
            setIsNavClicked(false);
        })
        document.querySelector("footer").addEventListener("click", e => {
            setIsNavClicked(false);
        })
    }, [])

    return (
        <>
            <HeaderWrap>
                {isNavClicked ? <NavBarWindow>
                    <Link href="/suapc"><NavBarElem>SUAPC 2021</NavBarElem></Link>
                    <Link href="/halloffame"><NavBarElem>명예의 전당</NavBarElem></Link>
                    <Link href="/sponser"><NavBarElem>후원 및 협업</NavBarElem></Link>
                    <Link href="/contact"><NavBarElem>문의하기</NavBarElem></Link>
                </NavBarWindow> : ""}
                <Link href="/">
                    <LogoImgWrap>
                        <LogoSVG isNavClicked={isNavClicked}/>
                    </LogoImgWrap>
                </Link>
                <div style={{ flexGrow: "1" }} />
                <Link href="/suapc"><HeaderElem style={{ color: '#009d3e' }}>SUAPC 2021</HeaderElem></Link>
                <Link href="/halloffame"><HeaderElem>명예의 전당</HeaderElem></Link>
                <Link href="/sponser"><HeaderElem>후원 및 협업</HeaderElem></Link>
                <Link href="/contact"><HeaderElem>문의하기</HeaderElem></Link>
                <NavBarWrap onClick={onNavClick}>
                    <NavSVG isNavClicked={isNavClicked}/>
                </NavBarWrap>
            </HeaderWrap>
        </>
    )
}

const NavBarWindow = styled.div`
    position: fixed;
    z-index: 10001;
    top: 0;
    left: 0;

    width: 100%;
    height: 190px;
    padding-top: 75px;

    background: #009D3E;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`

const HeaderWrap = styled.header`
    display:flex;
    align-items: center;
    
    position: fixed;
    background-color: white;
    z-index: 1000;
    width: 100%;
    max-width: 2000px;

    height:75px;
    padding: 0 3.2rem;

    @media(max-width: 700px){
        padding: 0 8vw;
    }
`

const HeaderElem = styled.div`
    font-family: 'KeepCalmMed', 'Noto Sans KR';
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: -0.02rem;

    padding: 0 1.1rem;

    cursor: pointer;

    &:last-child{
        padding-right: 0;
    }

    @media(max-width: 700px){
        font-size: 0.6rem;
        padding:0 0.6rem;
    }

    @media(max-width: 500px){
        display: none;
    }
`

const NavBarElem = styled.div`
    font-family: 'KeepCalmMed', 'Noto Sans KR';
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    letter-spacing: -0.02rem;

    text-align: right;

    padding: 0 8vw;

    cursor: pointer;
`

export default Header;