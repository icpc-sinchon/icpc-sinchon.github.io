import styled from 'styled-components'
import organizer from '../public/history/organizer.json'

const Footer_ = styled.footer`
    height: 260px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2.4rem 3.2rem 3rem 3.2rem;

    color: white;
    background-color: #009D3E;

    @media(max-width: 900px){
        height: auto;
    }

    @media(max-width: 500px){
        padding: 2.4rem 2rem 3rem 2rem;
    }
`

const BottomWrap = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: flex-end;

    @media(max-width: 900px){
        display: block;
        margin-top: 4rem;
    }
`

const OrganizerWrap = styled.div`
    font-size: 0.9rem;

    word-break: keep-all;
    span{
        &::after{
            padding: 0 6px;
            content: "|";
        }
    }
`

const OrgTitle = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
`

const CIWrap1 = styled.div`
    @media(max-width: 900px){
        margin-top: 2rem;
    }
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
    text-align: right;
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
                    <a href="mailto:icpc.sinchon@gmail.com"><img src="/res/footer/mail_white.svg" /></a>
                </IconWrap>
            </TopWrap>
            <BottomWrap>
                <OrganizerWrap>
                    <OrgTitle>회장</OrgTitle>
                    <div>
                        {organizer[0].president.map((person, idx) => {
                            if (idx != organizer[0].president.length - 1)
                                return (
                                    <span>{person.name}</span>
                                )
                            else
                                return person.name
                        })}
                    </div>
                    <OrgTitle style={{ marginTop: '0.2rem' }}>운영진</OrgTitle>
                    <div>
                        {organizer[0].member.map((person, idx) => {
                            if (idx != organizer[0].member.length - 1)
                                return (
                                    <span>{person.name}</span>
                                )
                            else
                                return person.name
                        })}
                    </div>
                </OrganizerWrap>
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