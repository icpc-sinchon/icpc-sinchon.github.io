import styled from 'styled-components'

const Footer_ = styled.footer`
    display: flex;
    height:288px;
    justify-content: space-between;
    align-items: flex-end;
    
    padding: 3.0rem 3.2rem;

    color: white;
    background-color: #009D3E;
`
const OrganizerWrap = styled.div`

`

const CIWrap1 = styled.div`

`
const CIWrap2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const OrgName= styled.div`
    font-size: 1.4rem;
`

const CIWrap = styled.div`
    width: 2rem;

    margin-left: 0.6rem;
`

const CopyRight = styled.div`
    font-size: 0.6rem;
`

const Footer = () => {
    return (
        <Footer_>
            <OrganizerWrap>운영진</OrganizerWrap>
            <CIWrap1>
                <CIWrap2>
                    <OrgName>ICPC Sinchon</OrgName>
                    <CIWrap>
                        <img src="/res/header/240white.svg" />
                    </CIWrap>
                </CIWrap2>
                <CopyRight>ⓒ 2020-2021 ICPC Sinchon. All Rights Reserved.</CopyRight>
            </CIWrap1>
        </Footer_>
    )
}

export default Footer;