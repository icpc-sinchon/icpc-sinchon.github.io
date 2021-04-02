import { useEffect } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { setCurrentSeasonIdx } from '../reducers/currentSeasonIdx'
import { setCurrentSeasonData } from '../reducers/currentSeasonData'
import { setCurrentYear } from '../reducers/currentYear'
import { setCurrentSeason } from '../reducers/currentSeason'
import { setSeasonList } from '../reducers/seasonList'

import SeasonSwitchArrow from '../components/Arrow/SeasonSwitchArrow'
import TextWrap from '../components/ContestWrap/ContestItem/TextWrap/TextWrap'
import TitleWrap from '../components/ContestWrap/ContestItem/TitleWrap/TitleWrap'
import ContestWrap from '../components/ContestWrap/ContestWrap'
import Layout from '../components/Layout'
import PreviewWrap from '../components/PreviewWrap/PreviewWrap'
import SeasonNav from '../components/SeasonNav/SeasonNav'

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

const HallOfFame = ({ seasonList_, seasonData_ }) => {

    useEffect(() => {
        let previewContainer = document.querySelectorAll(".preview-container")
        let contestWrapHeight = document.querySelector(".contest-wrap").offsetHeight
        previewContainer.forEach(ele => {
            ele.style.height = contestWrapHeight + "px"
        })
    })
    
    const title = `HALL OF FAME`

    const dispatch = useDispatch();
    const currentSeasonIdx = useSelector(state => state.currentSeasonIdx)
    const currentSeasonData = useSelector(state => state.currentSeasonData)
    const currentYear = useSelector(state => state.currentYear)
    const currentSeason = useSelector(state => state.currentSeason)
    const seasonList = useSelector(state => state.seasonList)


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
            let response = await fetch(`http://localhost:3000/history/halloffame/${season}.json`)
            let data = await response.json();

            return data;
        } catch (error) {
            return [];
        }
    }
    return (
        <Layout>
            <Head>
                <title>Hall Of Fame | ICPC Sinchon</title>
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
                        isSuapc={false}
                        title={title}
                        year={currentYear}
                        season={currentSeason}
                    />
                    <TextWrap
                        title="명예의 전당 소개"
                        content="ICPC 신촌 연합 활동에 기여를 해주신 분들과 열심히 활동하여 우수한 성적을 거둔 사람들을 기립니다"
                    />

                    {currentSeasonData.studies ? Array.from(currentSeasonData.studies).map(study => {
                        return (
                            study.contests ? Array.from(study.contests).map(contest => {
                                return (
                                    <>
                                        {contest.awards ? <>
                                            <ItemTitle><span style={{ color: 'white', backgroundColor: '#23a33d' }}>{study.topic}</span> 수상자</ItemTitle>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: `4rem` }}>순위</th>
                                                        <th>수상자</th>
                                                        <th style={{ width: `10rem` }}>BOJ Handle</th>
                                                        <th style={{ width: `7rem` }}>소속</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Array.from(contest.awards).map((award, idx) => {
                                                        return (
                                                            <tr>
                                                                <td>{idx + 1}위</td>
                                                                <td>{award.name}</td>
                                                                <td>nant0313</td>
                                                                <td>{award.school}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>

                                        </> : ""}
                                        {contest.problem_list ? <>
                                            <ItemTitle><span style={{ color: 'white', backgroundColor: '#23a33d' }}>{study.topic}</span> {contest.contest_name}</ItemTitle>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: `1rem` }}>#</th>
                                                        <th>문제</th>
                                                        <th>출제자</th>
                                                        <th style={{ width: `5rem` }}>소속</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Array.from(contest.problem_list).map((problem, idx) => {
                                                        return (
                                                            <tr>
                                                                <td>{String.fromCharCode(idx + 65)}</td>
                                                                <td><a href={problem.link}>{problem.problem_name}</a></td>
                                                                <td>{problem.organizer.name}</td>
                                                                <td>{problem.organizer.school}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </> : ""}
                                    </>
                                )
                            }) : ""
                        )
                    }) : ""}

                </ContestWrap>
            </>
        </Layout>
    )
}

HallOfFame.getInitialProps = async ({ store }) => {
    let response0 = await fetch(`http://localhost:3000/history/halloffame/${process.env.NEXT_PUBLIC_CURRENT_HALLOFFAME_SEASON}.json`)
    let data0 = await response0.json();
    let response1 = await fetch(`http://localhost:3000/history/halloffame/list.json`)
    let data1 = await response1.json();

    store.dispatch(setSeasonList(data1))
    store.dispatch(setCurrentSeasonData(data0))
    store.dispatch(setCurrentSeason(data0.season))
    store.dispatch(setCurrentYear(data0.year))
    store.dispatch(setCurrentSeasonIdx(data1.indexOf(process.env.NEXT_PUBLIC_CURRENT_HALLOFFAME_SEASON)))

    return {
        seasonData_: data0,
        seasonList_: data1
    }
}
export default HallOfFame