import React, { useState } from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/Header'
import styled, { css } from 'styled-components'
import styles from './suapc.module.scss'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import WinnerTableWrap from '../components/WinnerTable/WinnerTableWrap'

const SuapcDesc=`SUAPC는 신촌지역 5개 대학(연세, 서강, 이화, 홍익, 숙명)의
 학부생 및 대학원 1년차를 대상으로 하는 프로그래밍 대회입니다. 
 대회 문제는 서울 리저널의 문제 출제 경향을 따르며 제한시간 동안 
 얼마나 많은 문제를 정확하게 풀 수 있는지를 평가하여 순위를 결정합니다.`

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
    ${'' /* align-items: center; */}
`

const SeasonNav = styled.div`
    ${KeepCalmPreset}
    color: #C8C8C8;

    margin-left: 2.3rem;
    font-size: 0.85rem;
    cursor: pointer;

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

const ArrowWrap = styled.div`
    position: absolute;
    top: 270px;
    left: -130px;

    display: flex;
    justify-content: space-between;

    width: calc(100% + 260px);

`

const Arrow = css`
    cursor:pointer;
`
const ArrowLeft = styled.img`
    ${Arrow}
`

const ArrowRight = styled.img`
    ${Arrow}
`

const Suapc = (props) => {
    const [seasonList, setSeasonList] = useState(props.seasonList)
    const [currentSeasonIdx, setCurrentSeasonIdx] = useState(1)

    const [title, setTitle] = useState(`SUAPC ${props.seasonData.year} ${props.seasonData.season}`)
    const [year, setYear] = useState(props.seasonData.year)
    const [season, setSeason] = useState(props.seasonData.season)
    const [seasonData, setSeasonData] = useState(props.seasonData)

    const onSeasonNavClick = e => {
        let idx = parseInt(e.target.getAttribute('alt'))

        switchSeasonData(idx)
    }

    const onArrowClick = e => {
        let alt = e.target.getAttribute('alt')
        let l_r = -1;
        if (alt === "right-arrow") l_r = 1;

        if (!seasonList[l_r + currentSeasonIdx]) return;

        switchSeasonData(l_r + currentSeasonIdx)
    }

    const switchSeasonData = (idx) => {
        let season = seasonList[idx]

        fetchSeasonData(season).then(data => {
            setSeasonData(data)
        })
        setTitle("SUAPC " + season)
        setYear(season.split(' ')[0])
        setSeason(season.split(' ')[1])

        setCurrentSeasonIdx(idx)

        adjustSelectedNav(idx)
    }

    const adjustSelectedNav = idx => {
        document.querySelectorAll('.season-nav').forEach(ele => {
            if (ele.getAttribute('alt') == idx) {
                ele.classList.add(styles['season-selected'])
            } else {
                ele.classList.remove(styles['season-selected'])
            }
        })
    }

    const fetchSeasonData = async (season) => {
        try {
            let response = await fetch(`http://localhost:3000/history/suapc/${season}.json`)
            let data = await response.json();

            return data;
        } catch (error) {
            return [];
        }
    }

    return (
        <Layout>
            <Head>
                <title>SUAPC 2021 | ICPC Sinchon</title>
            </Head>
            <>
                <SeasonNavWrap>
                    {seasonList.map((elem, idx) => {
                        return (
                            <SeasonNav onClick={onSeasonNavClick} alt={idx} className={"season-nav " + (idx === currentSeasonIdx ? styles['season-selected'] : "")} > { elem}</SeasonNav>
                        )
                    })}
                </SeasonNavWrap>
                <div className={styles.suapc_wrap + " suapc_2021w"}>
                    <ArrowWrap>
                        <ArrowLeft onClick={onArrowClick} alt="left-arrow" src="res/button/arrow-left.svg" />
                        <ArrowRight onClick={onArrowClick} alt="right-arrow" src="res/button/arrow-right.svg" />
                    </ArrowWrap>
                    <TitleWrap>
                        <Title>{title}</Title>
                        <SubTitle>{year === "2021" ? 2021 : 2020} 신촌지역 대학교 프로그래밍 동아리 연합 {season === "Winter" ? "겨울" : "여름"} 대회</SubTitle>
                    </TitleWrap>
                    <ItemWrap>
                        <ItemTitle>대회 일자</ItemTitle>
                        <ItemContent>{seasonData.date}</ItemContent>
                    </ItemWrap>
                    <ItemWrap>
                        <ItemTitle>대회 소개</ItemTitle>
                        <ItemContent>{SuapcDesc}</ItemContent>
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
                            <SponserCI src='/res/sponser-ci/vuno.png' />
                            <SponserCI src='/res/sponser-ci/jetbrains.png' />
                        </SchoolLogoWrap>
                    </ItemWrap>
                    {seasonData.awards ?
                        <ItemWrap>
                            <ItemTitle>수상 내역</ItemTitle>
                            <WinnerTableWrap data={seasonData.awards} />
                        </ItemWrap>
                        : ""}
                </div>
            </>
        </Layout>
    )
}

Suapc.getInitialProps = async ({ req, res, match, history, location, ...ctx }) => {

    let response0 = await fetch('http://localhost:3000/history/suapc/2021 Winter.json')
    let data0 = await response0.json();

    let response1 = await fetch('http://localhost:3000/history/suapc/list.json')
    let data1 = await response1.json();

    return {
        seasonList: data1,
        seasonData: data0
    }
}
export default Suapc;