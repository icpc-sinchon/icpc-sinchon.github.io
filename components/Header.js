import styled from 'styled-components'
import Link from 'next/link'


const Header = () => {
    return (
        <HeaderWrap>
            <Link href="/">
                <LogoImgWrap>
                    <LogoImg src="/res/header/240logo.svg" />
                </LogoImgWrap>
            </Link>
            <div style={{ flexGrow: "1" }} />
            <Link href="/suapc"><HeaderElem style={{ color: '#009d3e' }}>SUAPC 2021</HeaderElem></Link>
            <Link href="/halloffame"><HeaderElem>명예의 전당</HeaderElem></Link>
            <Link href="/contact"><HeaderElem>문의 및 협업 제안</HeaderElem></Link>
            <NavBarWrap>
                <LogoImg src="res/header/navbar.svg" />
            </NavBarWrap>
        </HeaderWrap>
    )
}

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
const LogoImgWrap = styled.div`
    width:36px;

    cursor: pointer;
    @media(max-width: 700px){
        width:32px;
    }
`

const LogoImg = styled.img`
    width:100%;
    height:100%;
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

const NavBarWrap = styled.div`
    display: none;
    @media(max-width: 500px){
        display: block;
    }
`
export default Header;