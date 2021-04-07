import styled from 'styled-components'
import organizer from '../public/history/organizer.json'
import Mailto from 'react-protected-mailto'

const Footer_ = styled.footer`
    height: 260px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2.4rem 3.2rem 3rem 3.2rem;

    color: white;
    background-color: #009D3E;
`

const BottomWrap = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: flex-end;
`

const OrganizerWrap = styled.div`

`

const CIWrap1 = styled.div`

`
const CIWrap2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.4rem;
`

const CIWrap = styled.div`
    width: 2rem;

    margin-left: 0.6rem;
`

const CopyRight = styled.div`
    font-size: 0.6rem;
`

const IconWrap = styled.div`
    display: flex;

    a {
        padding: 0 .5rem;
        &:last-child{
            padding-right: 0;
        }
    }
`

const TopWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Footer = () => {
    return (
        <Footer_>
            <TopWrap>
                <div>2021 Summer</div>
                <IconWrap>
                    <a href="https://pf.kakao.com/_xehxhAK"><img src="/res/footer/talk_white.svg" /></a>
                    <Mailto email="icpc.sinchon@gmail.com">
                        <img src="/res/footer/mail_white.svg" />
                    </Mailto>
                </IconWrap>
            </TopWrap>
            <BottomWrap>
                <OrganizerWrap>운영진</OrganizerWrap>
                {organizer[0].member.map(person => {
                    return person.name
                })}
                <CIWrap1>
                    <CIWrap2>
                        <div>ICPC Sinchon</div>
                        <CIWrap>
                            <img src="/res/footer/240white.svg" />
                        </CIWrap>
                    </CIWrap2>
                    <CopyRight>ⓒ 2020-2021 ICPC Sinchon. All Rights Reserved.</CopyRight>
                </CIWrap1>
            </BottomWrap>
        </Footer_>
    )
}

export default Footer;