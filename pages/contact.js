import Layout from "../components/Layout"
import styled, { css } from "styled-components"
import Head from "next/head"

const Contact = () => {

    return (
        <Layout>
            <Head>
                <title>Contact | ICPC Sinchon</title>
            </Head>
            <div className="main-wrap">
                <div className="content-wrap-main">
                    {/* <TextTitle>연합에 가입하려면 각 학교 학회의 학회장에게 연락해주세요</TextTitle> */}
                    <TextTitle>후원 및 협업</TextTitle>
                    <TextSubTitle>ICPC Sinchon과 함께 성장하실 기업을 모집하고 있습니다
                    <br />
                    매 시즌 신촌지역 5개 대학의 컴퓨터공학과 전공생들을 대상으로 연합 활동을 진행하는 우리 동아리와 함께하세요
                    </TextSubTitle>
                </div>
            </div>
        </Layout>
    )
}

const SinchonColor = css`
    color: #009D3E;
`

const TextTitle = styled.div`
    ${SinchonColor}    

    font-size: 1.4rem;
    font-weight: 700;
`

const TextSubTitle = styled.div`
    font-size: 1.02rem;
    font-weight: 500;
`

export default Contact