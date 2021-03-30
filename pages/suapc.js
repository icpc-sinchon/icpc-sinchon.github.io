import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/Header'
import styled, { css } from 'styled-components'
import styles from './suapc.module.scss'

const NotoSansBold = css`
    font-family: 'Noto Sans KR';
    font-weight: 700;
`

const KeepCalmPreset = css`
    font-family: 'KeepCalmMed';
    font-weight: normal;
`

const SinchonColor = css`
    color: #009D3E;
`

const SeasonNavWrap = styled.div`
    padding: 18px 0 38px 0;
    
    display: flex;
    align-items: center;
`

const SeasonNav = styled.div`
    ${KeepCalmPreset}
    color: #C8C8C8;

    margin-left: 2.3rem;
    font-size: 0.85rem;

    &:first-child{
        margin-left: 3.2rem;
    }
`

const TitleWrap = styled.div`

`

const Title = styled.h1`
    ${KeepCalmPreset}
    ${SinchonColor}
    font-size: 2.6em;
    
    line-height: 1.2;
    
    margin: 0;
`

const SubTitle = styled.p`
    ${NotoSansBold}
    
    margin: 0 0 3rem 0;
`

const ItemWrap = styled.div`
    padding-bottom: 1rem;
`

const ItemTitle = styled.h3`
    ${NotoSansBold}
    ${SinchonColor}

    margin: 1em 0 0.4em 0;
`

const ItemContent = styled.p`
    font-family: 'Noto Sans KR';
    font-weight: 500;

    margin: 0;
`
const SchoolLogoWrap = styled.div`
    display:flex;
`

const SchoolLogo = styled.img`
    ${'' /* width: 2.7rem; */}
    height: 2.7rem;

    margin-left: 1.1rem;

    &:first-child{
        margin-left: 0;
    }
`

const SponserCI = styled.img`
    height: 1.5rem;

    margin-left: 1.1rem;

    &:first-child{
        margin-left: 0;
    }
`

const Suapc = () => {
    return (
        <Layout>
            <Head>
                <title>SUAPC 2021 | ICPC Sinchon</title>
            </Head>
            <>
                <Header />
                <SeasonNavWrap>
                    <SeasonNav>2020 Winter</SeasonNav>
                    <SeasonNav>2020 Summer</SeasonNav>
                    <SeasonNav className={styles['season-selected']}>2021 Winter</SeasonNav>
                    <SeasonNav>2021 Summer</SeasonNav>
                </SeasonNavWrap>
                <div className={styles.suapc_wrap + " suapc_2021w"}>
                    <TitleWrap>
                        <Title>SUAPC 2021 Winter</Title>
                        <SubTitle>2021 신촌지역 대학교 프로그래밍 동아리 연합 겨울 대회</SubTitle>
                    </TitleWrap>
                    <ItemWrap>
                        <ItemTitle>대회 소개</ItemTitle>
                        <ItemContent>SUAPC는 신촌지역 5개 대학(연세, 서강, 이화, 홍익, 숙명)의 학부생 및 대학원 1년차를 대상으로 하는
                        프로그래밍 대회입니다. 대회 문제는 서울 리저널의 문제 출제 경향을 따르며 제한시간 동안 얼마나 많은
문제를 정확하게 풀 수 있는지를 평가하여 순위를 결정합니다.</ItemContent>
                    </ItemWrap>
                    <ItemWrap>
                        <ItemTitle>참여 대학</ItemTitle>
                        <SchoolLogoWrap>
                            <SchoolLogo src='/res/school-logo/sogang.png' />
                            <SchoolLogo src='/res/school-logo/sookmyung.png' />
                            <SchoolLogo src='/res/school-logo/yonsei.png' />
                            <SchoolLogo src='/res/school-logo/ewha.png' />
                            <SchoolLogo src='/res/school-logo/hongik.png' />
                        </SchoolLogoWrap>
                    </ItemWrap>
                    <ItemWrap>
                        <ItemTitle>후원사</ItemTitle>
                        <SchoolLogoWrap>
                            <SponserCI src='/res/sponser-ci/kakao.png' />
                            <SponserCI src='/res/sponser-ci/naver.png' />
                            <SponserCI src='/res/sponser-ci/hanbit.png' />
                            <SponserCI src='/res/sponser-ci/jpub.png' />
                            <SponserCI src='/res/sponser-ci/youngjin.png' />
                            {/* <SponserCI src='/res/sponser-ci/jetbrains.png' /> */}
                        </SchoolLogoWrap>
                    </ItemWrap>
                </div>
            </>
        </Layout>
    )
}

export default Suapc;