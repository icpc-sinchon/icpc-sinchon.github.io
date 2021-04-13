import Head from 'next/head'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'

const SinchonColor = css`
    color: #009D3E;
`
const NotoSansBold = css`
    font-family: 'Noto Sans KR';
    font-weight: 700;
`
const MainBottom = css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 1.6rem 0 1rem 0;
`

const Main = () => {
    return (
        <Layout>
            <Head>
                <title>Main | ICPC Sinchon</title>
            </Head>
            <MainWrap className="main-wrap">
                <ContentWrap className="content-wrap-main">
                    <TextTitle>ICPC Sinchon</TextTitle>
                    <TextSubTitle>신촌지역 대학교 프로그래밍 대회 동아리 연합</TextSubTitle>
                </ContentWrap>
                <MainImageWrap>
                    <img src="https://api.suapc.kr/res/c-4.jpg"/>
                </MainImageWrap>
                <ContentWrap css={MainBottom} className="content-wrap-main">
                    <ContentItem className="ContentItem">
                        <ContentTitle>소개</ContentTitle>
                        <ContentText style={{ fontFamily: 'Noto Sans KR' }}>
                            안녕하세요 신촌지역 대학교 프로그래밍 대회 동아리 연합입니다.
                            서강대학교, 숙명여자대학교, 연세대학교,
                            이화여자대학교, 홍익대학교 프로그래밍
                            동아리의 연합 동아리로, 각 학교 컴퓨터공학과 전공생
                            180명으로 구성되어 있습니다.
                            2020년 겨울부터 활동을 시작하여
                            매 시즌 정기적인 활동을 이어 나가고 있습니다.
                            </ContentText>
                    </ContentItem>
                    <ContentItem className="ContentItem">
                        <ContentTitle>소속 학교</ContentTitle>
                        <SchoolWrap>
                            <SchoolItem>
                                <img src="https://api.suapc.kr/res/school-logo/sogang.png" />
                                <h4>Sogang<br />ICPC Team</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="https://api.suapc.kr/res/school-logo/sookmyung.png" />
                                <h4>Algos</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="https://api.suapc.kr/res/school-logo/yonsei.png" />
                                <h4>Morgorithm</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="https://api.suapc.kr/res/school-logo/ewha.png" />
                                <h4>EDOC</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="https://api.suapc.kr/res/school-logo/hongik.png" />
                                <h4>HI-ARC</h4>
                            </SchoolItem>
                        </SchoolWrap>
                    </ContentItem>
                    <ContentItem className="ContentItem ContentItem-PC">
                        <ContentTitle>활동</ContentTitle>
                        <ContentText>
                            매 시즌 프로그래밍 대회 <span css={SinchonColor}>SUAPC</span>를 개최하여
                            팀원과의 협업을 통해 <span style={{ fontFamily: 'Noto Sans KR' }}>ICPC</span>를 준비할 수 있는 환경을 제공합니다.
                            <br />
                            강의 형식의 스터디인 <span css={SinchonColor}> Algorithm Camp</span>도 진행하여
                            연합원들에게 알고리즘 공부의 기회를 제공합니다.
                            <br />
                            캠프 이후에는 <span css={SinchonColor}>Camp Contest</span>를 통해
                            다른 학회원들과 경쟁하며 본인의 실력을 확인할 수 있는 모의고사를 치릅니다.
                        </ContentText>
                    </ContentItem>
                    <ContentItem className="ContentItem ContentItem-Tablet">
                        <ContentTitle style={{ fontFamily: `KeepCalmMed`, fontWeight: `unset` }}>SUAPC</ContentTitle>
                        <ContentText style={{ fontFamily: 'Noto Sans KR' }}>
                            매 시즌 프로그래밍 대회를 개최하여
                            팀원과의 협업을 통해 ICPC를
                             준비할 수 있는 환경을 제공합니다.
                            <br />
                            문제 또한 ICPC 서울 리저널의 경향을 따르며, 제한시간 동안 얼마나 많은 문제를 정확하게 풀어내는지를 평가하여
                            순위를 결정합니다.
                            <br />
                            신촌지역 5개 학교 학부생이라면 누구나 참여 가능합니다.
                            </ContentText>
                    </ContentItem>
                    <ContentItem className="ContentItem ContentItem-Tablet">
                        <ContentTitle style={{ fontFamily: `KeepCalmMed`, fontWeight: `unset` }}>Algorithm Camp</ContentTitle>
                        <ContentText>
                            강의 형식의 스터디인 <span css={SinchonColor}> Algorithm Camp</span>를 진행하여
                            연합원들에게 알고리즘 공부의 기회를 제공합니다.
                            <br />
                            캠프 이후에는 <span css={SinchonColor}>Camp Contest</span>를 통해
                            다른 학회원들과 경쟁하며 본인의 실력을 확인할 수 있는 모의고사를 치릅니다.
                            </ContentText>
                    </ContentItem>
                </ContentWrap>
            </MainWrap>
        </Layout>
    )
}

const MainWrap = styled.div`
    padding: 2rem 0;
`

const ContentWrap = styled.div`
    height: 100%;

    padding: 0 5.2rem;
`

const TextTitle = styled.div`
    ${SinchonColor}

    line-height: 1;

    font-size: 2.1rem;
    letter-spacing: -0.04rem;
`

const TextSubTitle = styled.div`
    ${SinchonColor}

    font-size: 1.02rem;
    font-weight: 700;
`

const MainImageWrap = styled.div`
    width: 100%;
    height: 340px;

    margin: 1.2rem 0 0 0;

    ${'' /* border-top: 1px solid #707070; */}
    ${'' /* border-bottom: 1px solid #707070; */}

    overflow: hidden;

    @media(max-width: 1000px){
        height: 50vw;
    }
`

const ContentItem = styled.div`
    width: 26vw;
    max-width: 30rem;
`

const ContentTitle = styled.h3`
    ${NotoSansBold}
    ${SinchonColor}
    font-size: 1.2rem;

    margin: 1em 0 0.4em 0;
`

const ContentText = styled.p`
    font-size: 0.9rem;
    font-weight: 400;

    line-height: 1.44;
`

const SchoolWrap = styled.p`
    display: flex;
    justify-content: space-between;

    @media(min-width: 1505px){
        justify-content: space-evenly;
    }

    @media(max-width:1135px){
        justify-content: space-evenly;
    }
`

const SchoolItem = styled.div`
    img{
        height: 3.6rem;

        margin: 0 auto;
    }

    h4{
        font-family: 'Noto Sans KR';
        font-size: 0.7rem;
        font-weight: 500;

        text-align: center;

        line-height: 1.2;
    }
`

export default Main