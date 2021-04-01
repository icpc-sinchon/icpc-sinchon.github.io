import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import Head from 'next/head'

import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSeasonIdx } from '../reducers/currentSeasonIdx'
import { setCurrentSeasonData } from '../reducers/currentSeasonData'
import { setCurrentYear } from '../reducers/currentYear'
import { setCurrentSeason } from '../reducers/currentSeason'
import { setSeasonList } from '../reducers/seasonList'

import Layout from '../components/Layout'
import WinnerTableWrap from '../components/WinnerTable/WinnerTableWrap'
import SeasonSwitchArrow from '../components/Arrow/SeasonSwitchArrow'
import SeasonNav from '../components/SeasonNav/SeasonNav'
import ContestWrap from '../components/ContestWrap/ContestWrap'
import TitleWrap from '../components/ContestWrap/ContestItem/TitleWrap/TitleWrap'
import TextWrap from '../components/ContestWrap/ContestItem/TextWrap/TextWrap'
import ItemWrap from '../components/ContestWrap/ContestItem/ItemWrap'
import PreviewWrap from '../components/PreviewWrap/PreviewWrap'


const SuapcDesc = `SUAPC는 신촌지역 5개 대학(연세, 서강, 이화, 홍익, 숙명)의
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

const ItemTitle = styled.h3`
    ${NotoSansBold}
    ${SinchonColor}

    margin: 1em 0 0.4em 0;
`

const SchoolLogoWrap = styled.div`
    display:flex;
    overflow-x: auto;
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

    ${'' /* margin-left: 1.1rem; */}

    ${'' /* &:first-child{
        margin-left: 0;
    } */}
`

const Suapc = ({ seasonData_, seasonList_ }) => {
    const dispatch = useDispatch();
    const currentSeasonIdx = useSelector(state => state.currentSeasonIdx)
    const currentSeasonData = useSelector(state => state.currentSeasonData)
    const currentYear = useSelector(state => state.currentYear)
    const currentSeason = useSelector(state => state.currentSeason)
    const seasonList = useSelector(state => state.seasonList)

    useEffect(() => {
        dispatch(setSeasonList(seasonList_))
        dispatch(setCurrentSeasonData(seasonData_))
        dispatch(setCurrentSeason(seasonData_.season))
        dispatch(setCurrentYear(seasonData_.year))
        dispatch(setCurrentSeasonIdx(seasonList_.indexOf(process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON)))
    }, [])

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

    const switchSeasonData = idx => {
        let season = seasonList[idx]

        fetchSeasonData(season).then(data => {
            dispatch(setCurrentSeasonData(data))
        })
            .catch(err => { console.log(err) })

        dispatch(setCurrentYear(season.split(' ')[0]))
        dispatch(setCurrentSeason(season.split(' ')[1]))
        dispatch(setCurrentSeasonIdx(idx))

        adjustSelectedNav(idx)
    }

    const adjustSelectedNav = idx => {
        document.querySelectorAll('.season-nav').forEach(ele => {
            if (ele.getAttribute('alt') == idx) {
                ele.classList.add('season-selected')
            } else {
                ele.classList.remove('season-selected')
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
                <SeasonNav
                    onSeasonNavClick={onSeasonNavClick}
                />
                <PreviewWrap />
                <ContestWrap>
                    <SeasonSwitchArrow
                        onArrowClick={onArrowClick}
                    />
                    <TitleWrap
                        isSuapc={true}
                        title={`SUAPC ${currentYear} ${currentSeason}`}
                        year={currentYear}
                        season={currentSeason}
                    />
                    <TextWrap
                        title="대회 일자"
                        content={currentSeasonData.date}
                    />
                    <TextWrap
                        title="대회 소개"
                        content={SuapcDesc}
                    />
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
                        <SchoolLogoWrap style={{ flexWrap: `wrap`, justifyContent: `space-between` }}>
                            <SponserCI src='/res/sponser-ci/kakao.png' />
                            <SponserCI src='/res/sponser-ci/naver.png' />
                            <SponserCI src='/res/sponser-ci/hanbit.png' />
                            <SponserCI src='/res/sponser-ci/jpub.png' />
                            <SponserCI src='/res/sponser-ci/youngjin.png' />
                            <SponserCI src='/res/sponser-ci/vuno.png' />
                            {/* <SponserCI src='/res/sponser-ci/jetbrains.png' /> */}
                        </SchoolLogoWrap>
                    </ItemWrap>
                    {currentSeasonData.awards ?
                        <ItemWrap>
                            <ItemTitle>수상 내역</ItemTitle>
                            <WinnerTableWrap data={currentSeasonData.awards} />
                        </ItemWrap>
                        : ""}
                    <div style={{ display: `flex`, justifyContent: `space-between` }}>
                        <ItemWrap>
                            <ItemTitle>출제진</ItemTitle>
                            <table>
                                <thead>
                                    <th style={{ width: `8rem` }}>이름</th>
                                    <th>소속</th>
                                </thead>
                                <tbody>
                                    {currentSeasonData.examiner ? Array.from(currentSeasonData.examiner).map(elem => {
                                        return (
                                            <tr>
                                                <td>{elem.name}</td>
                                                <td>{elem.school}</td>
                                            </tr>
                                        )
                                    }) : ""}
                                </tbody>
                            </table>
                        </ItemWrap>
                        <ItemWrap>
                            <ItemTitle>검수진</ItemTitle>
                            <table>
                                <thead>
                                    <th style={{ width: `8rem` }}>이름</th>
                                    <th>소속</th>
                                </thead>
                                <tbody>
                                    {currentSeasonData.checker ? Array.from(currentSeasonData.checker).map(elem => {
                                        return (
                                            <tr>
                                                <td>{elem.name}</td>
                                                <td>{elem.school}</td>
                                            </tr>
                                        )
                                    }) : ""}
                                </tbody>
                            </table>
                        </ItemWrap>
                    </div>
                </ContestWrap>
            </>
        </Layout>
    )
}

Suapc.getInitialProps = async ({ req, res, match, history, location }) => {
    let response0 = await fetch(`http://localhost:3000/history/suapc/${process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON}.json`)
    let data0 = await response0.json();
    let response1 = await fetch(`http://localhost:3000/history/suapc/list.json`)
    let data1 = await response1.json();

    return {
        seasonData_: data0,
        seasonList_: data1
    }
}

export default Suapc;