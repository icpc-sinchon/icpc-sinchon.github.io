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

    margin: 2.4rem 0 1rem 0;
`

const Main = () => {
    return (
        <Layout>
            <Head>
                <title>Main | ICPC Sinchon</title>
            </Head>
            <MainWrap>
                <ContentWrap className="content-wrap-main">
                    <TextTitle>ICPC Sinchon</TextTitle>
                    <TextSubTitle>신촌지역 대학교 프로그래밍 대회 동아리 연합</TextSubTitle>
                </ContentWrap>
                <MainImageWrap>

                </MainImageWrap>
                <ContentWrap css={MainBottom} className="content-wrap-main">
                    <ContentItem className="ContentItem">
                        <ContentTitle>소개</ContentTitle>
                        <ContentText>
                            신촌지역 대학교 프로그래밍 대회 동아리 연합입니다.
                            서강대학교, 숙명여자대학교, 연세대학교,
                            이화여자대학교, 홍익대학교 프로그래밍
                            동아리가 연합하여 활동중입니다.
                            </ContentText>
                    </ContentItem>
                    <ContentItem className="ContentItem">
                        <ContentTitle>소속 학교</ContentTitle>
                        <SchoolWrap>
                            <SchoolItem>
                                <img src="res/school-logo/sogang.png" />
                                <h4>Sogang<br />ICPC Team</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="res/school-logo/sookmyung.png" />
                                <h4>Algos</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="res/school-logo/yonsei.png" />
                                <h4>Morgorithm</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="res/school-logo/ewha.png" />
                                <h4>EDOC</h4>
                            </SchoolItem>
                            <SchoolItem>
                                <img src="res/school-logo/hongik.png" />
                                <h4>HI-ARC</h4>
                            </SchoolItem>
                        </SchoolWrap>
                    </ContentItem>
                    <ContentItem className="ContentItem ContentItem-PC">
                        <ContentTitle>활동</ContentTitle>
                        <ContentText>
                            매 시즌 프로그래밍 대회를 개최하며 알고리즘 캠프를 통해
                            연합원들에게 알고리즘 공부의 기회를 제공합니다.
                            </ContentText>
                    </ContentItem>
                    <ContentItem className="ContentItem ContentItem-Tablet">
                        <ContentTitle>SUAPC</ContentTitle>
                        <ContentText>
                            매 시즌 프로그래밍 대회를 개최하며 알고리즘 캠프를 통해
                            연합원들에게 알고리즘 공부의 기회를 제공합니다.
                            </ContentText>
                    </ContentItem>
                    <ContentItem className="ContentItem ContentItem-Tablet">
                        <ContentTitle>Algorithm Camp</ContentTitle>
                        <ContentText>
                            매 시즌 프로그래밍 대회를 개최하며 알고리즘 캠프를 통해
                            연합원들에게 알고리즘 공부의 기회를 제공합니다.
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
    font-size: 1.02rem;
    font-weight: 700;
`

const MainImageWrap = styled.div`
    width: 100%;
    height: 265px;

    margin: 1.2rem 0 0 0;

    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
`

const ContentItem = styled.div`
    width: 20rem;
`

const ContentTitle = styled.h3`
    ${NotoSansBold}
    ${SinchonColor}

    margin: 1em 0 0.4em 0;
`

const ContentText = styled.p`
    font-weight: 500;
    line-height: 1.4;
`

const SchoolWrap = styled.p`
    display: flex;
    justify-content: space-between;

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