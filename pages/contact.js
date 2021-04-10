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
            </Head>
            <div className="main-wrap">
                <div className="content-wrap-main">
                    
                <ItemWrap>
                        <MainTextTitle>ICPC Sinchon 연합 활동에 함께하세요</MainTextTitle>
                        <TextSubTitle>
                            {/* <span css={[SinchonColor, KeepCalmFont]}>ICPC Sinchon</span>과 함께할 후원사를 모집하고 있습니다
                    <br /> */}
                    지금까지의 모든 연합 활동은 후원사의 후원을 통해 성공적으로 개최될 수 있었습니다
                    <br />
                    참가자에게 제공되는 상금 및 각종 상품들을 제공해주시면, <span css={[SinchonColor, KeepCalmFont]}>ICPC Sinchon</span>은
                    참가자들을 상대로 기업에 대한 홍보를 진행합니다
                    <br />
                    매 시즌 신촌지역 5개 대학의 컴퓨터공학과 전공생들을 대상으로 이루어지는 연합 활동의 후원사로 참여하여 기업 홍보 효과를 누리세요                    <br />
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

export default Contact