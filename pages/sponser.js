import Layout from "../components/Layout"
import styled, { css } from "styled-components"
import Head from "next/head"


const SinchonColor = css`
    color: #009D3E;
`

const KeepCalmFont = css`
    font-family: 'KeepCalmMed';
`

const Sponser = () => {

    return (
        <Layout>
            <Head>
                <title>Sponser | ICPC Sinchon</title>
            </Head>
            <div className="main-wrap">
                <div className="content-wrap-main">
                    {/* <TextTitle>연합에 가입하려면 각 학교 학회의 학회장에게 연락해주세요</TextTitle> */}
                    <ItemWrap>
                        <MainTextTitle>ICPC Sinchon과 함께할 후원사를 모집하고 있습니다</MainTextTitle>
                        <TextSubTitle>
                            지금까지의 모든 연합 활동은 후원사의 후원을 통해 성공적으로 개최될 수 있었습니다
                    <br />
                    참가자에게 제공되는 상금 및 각종 상품들을 제공해주시면, <span css={[SinchonColor, KeepCalmFont]}>ICPC Sinchon</span>은
                    참가자들을 상대로 기업에 대한 홍보를 진행합니다
                    <br />
                    매 시즌 신촌지역 5개 대학의 컴퓨터공학과 전공생들을 대상으로 이루어지는 연합 활동의 후원사로 참여하여 기업 홍보 효과를 누리세요                    <br />
                        </TextSubTitle>
                    </ItemWrap>
                    <ItemWrap style={{ marginTop: '2rem' }}>
                        <TextTitle>다음의 후원품들을 제공받고 싶습니다</TextTitle>
                        <ul>
                            <li>후원금</li>
                            <li>컴퓨터 과학 서적</li>
                            <li>기업 로고 스티커 및 기념품</li>
                            <li>기업 이름을 상 이름으로 한 특별상 상품</li>
                        </ul>
                    </ItemWrap>
                    <ItemWrap>
                        <TextTitle>다음과 같은 기업 홍보 방안을 제공합니다</TextTitle>
                        <ul>
                            <li>대회 포스터 내 후원사 로고 포함</li>
                            <li>후원사 이름 및 서비스와 관련된 대회 문제 출제</li>
                            <li>대회 이후 진행되는 스트리밍에서 후원사 홍보 세션 제공</li>
                            <li>후원사 기술 커뮤니티 내 대회 결과 보고 관련 게시글 작성</li>
                            <li>1등상 혹은 특별상의 이름을 후원사의 이름이 반영되도록 지정</li>
                            <li>대회 이후 진행되는 스트리밍 화면 하단을 후원사 로고가 보여지도록 구성</li>
                        </ul>
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

    font-size: 1.8rem;
    font-weight: 700;
`

const TextTitle = styled.div`
    ${SinchonColor}    

    font-size: 1.4rem;
    font-weight: 700;
`

const TextSubTitle = styled.div`
    font-family: 'Noto Sans KR';
    font-size: 1.02rem;
    font-weight: 500;
`

const TopicTitle = styled.h3`   
`

export default Sponser