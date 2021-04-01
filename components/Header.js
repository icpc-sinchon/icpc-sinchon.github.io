import styled from 'styled-components'
import Link from 'next/link'

const HeaderWrap = styled.header`
    display:flex;
    align-items: center;
    
    position: fixed;
    background-color: white;
    z-index: 1000;
    width: 100%;
    max-width: 2300px;

    height:75px;
    padding: 0 3.2rem;

`
const LogoImgWrap = styled.div`
    width:36px;
`

const LogoImg = styled.img`
    width:100%;
    height:100%;
`

const HeaderElem = styled.div`
    font-family: 'KeepCalmMed';
    font-size: 0.8rem;
    letter-spacing: -0.4px;

    margin-left: 2.2rem;
`

const Header = () => {
    return (
        <HeaderWrap>
            <LogoImgWrap>
                <LogoImg src="/res/header/240logo.svg" />
            </LogoImgWrap>
            <div style={{ flexGrow: "1" }} />
            <Link href="/suapc"><HeaderElem>SUAPC 2021</HeaderElem></Link>
            <Link href="/halloffame"><HeaderElem>HALL OF FAME</HeaderElem></Link>
            <HeaderElem>ORGANIZERS</HeaderElem>
        </HeaderWrap>
    )
}

export default Header;