import Layout from "../components/Layout"
import styled, { css } from "styled-components"
import Head from "next/head"


const SinchonColor = css`
    color: #009D3E;
`

const KeepCalmFont = css`
    font-family: 'KeepCalmMed';
`

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact | ICPC Sinchon</title>
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:title" content="Contact | ICPC Sinchon" />
                <meta property="og:url" content="https://icpc-sinchon.io/contact" />
                <meta property="og:description" content="신촌지역 대학교 프로그래밍 동아리 연합" />
                <meta property="og:image" content="https://api.suapc.kr/res/c-4.jpg" />
            </Head>
            <div className="main-wrap" style={{paddingTop: '1.2rem'}}>
                <div className="content-wrap-main">
                    
                <ItemWrap>
                        <MainTextTitle>ICPC Sinchon 연합 활동에 함께하세요</MainTextTitle>
                        <TextSubTitle>
                            서강대학교, 숙명여자대학교, 연세대학교, 이화여자대학교, 홍익대학교 각 학교 알고리즘 학회 소속이라면 
                            <span css={[SinchonColor, KeepCalmFont]}> ICPC Sinchon</span> 활동에 함께하실 수 있습니다.
                            <br /><br />
                            가입 관련 문의는 각 학교 학회의 학회장에게 연락해주세요.
                            {/* <br />
                            서강대학교 - Sogang ICPC Team
                            <br />
                            숙명여자대학교 - Algos
                            <br />
                            연세대학교 - Morgorithm
                            <br />
                            이화여자대학교 - EDOC
                            <br />
                            홍익대학교 - HI-ARC */}
                        </TextSubTitle>
                    </ItemWrap>
                </div>
            </div>
        </Layout>
    )
}

const ItemWrap = styled.div`
    padding-bottom: 1rem;
`
const MainTextTitle = styled.h1`
    ${SinchonColor}    

    font-family: 'KeepCalmMed', 'Apple SD Gothic Neo';
    font-size: 1.8rem;
    font-weight: 700;

    @media(max-width: 470px){
        font-size: 1.6rem;
    }
`

const TextTitle = styled.div`
    ${SinchonColor}    

    font-size: 1.4rem;
    font-weight: 700;

    @media(max-width: 470px){
        font-size: 1.2rem;
    }
`

const TextSubTitle = styled.div`
    font-size: 1.02rem;
    font-weight: 500;
`

const TopicTitle = styled.h3`   
`

export default Contact