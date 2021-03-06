import { useEffect, useRef } from 'react'
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
import ItemWrap from '../components/ContestWrap/ContestItem/ItemWrap'

const data0 = require(`../public/history/halloffame/${process.env.NEXT_PUBLIC_CURRENT_HALLOFFAME_SEASON}.json`)
const data1 = require(`../public/history/halloffame/list.json`)

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

const TopicTitle = styled.h3`
    ${NotoSansBold}
    ${SinchonColor}

    width: 3rem;
    margin: 1em 0.3rem 0.4em 0;

    text-align: center;
    align-self: baseline;

    background-color: #23a33d;
    color: white;
`

const TopicWrap = styled.div`
    display: flex;

    @media(max-width: 900px){
        display: block;

        padding: 0.8rem 0;
    }
`

const TableWrap = styled.div`
    overflow-x: auto;
    white-space: nowrap;
`

const CampContest = ({ seasonList_, seasonData_ }) => {

    const title = `ICPC Sinchon Camp Contest`

    const contestWrapRef = useRef(null)
    const dispatch = useDispatch();
    const currentSeasonIdx = useSelector(state => state.currentSeasonIdx)
    const currentSeasonData = useSelector(state => state.currentSeasonData)
    const currentYear = useSelector(state => state.currentYear)
    const currentSeason = useSelector(state => state.currentSeason)
    const seasonList = useSelector(state => state.seasonList)

    useEffect(() => {
        if (!contestWrapRef.current) return
        adjustPreviewWrapHeight()
    })

    const adjustPreviewWrapHeight = () => {
        const previewContainer = document.querySelectorAll(".preview-container")
        const contestWrapBoundary = contestWrapRef?.current?.getBoundingClientRect();
        previewContainer.forEach(ele => {
            ele.style.height = contestWrapBoundary.height + "px"
        })
    }

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
            let response = await fetch(`${process.env.NEXT_PUBLIC_URL}/history/halloffame/${season}.json`)
            let data = await response.json();

            return data;
        } catch (err) {
            console.error(err)
            return []
        }
    }

    return (
        <Layout>
            <Head>
                <title>Camp Contest | ICPC Sinchon</title>
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ko_KR" />
                <meta property="og:title" content="Camp Contest | ICPC Sinchon" />
                <meta property="og:url" content="https://icpc-sinchon.io/campcontest" />
                <meta property="og:description" content="ICPC Sinchon Camp Contest" />
                <meta property="og:image" content="https://api.suapc.kr/res/c-4.jpg" />
            </Head>
            <>
                <SeasonNav
                    onSeasonNavClick={onSeasonNavClick}
                />
                <PreviewWrap />
                <ContestWrap ref={contestWrapRef}>
                    <SeasonSwitchArrow
                        onArrowClick={onArrowClick}
                    />
                    <TitleWrap
                        pageType={"campcontest"}
                        title={title}
                        year={currentYear}
                        season={currentSeason}
                    />
                    <TextWrap
                        title={currentSeasonData.length !== 0 ? "???????????? ??????" : "??? ?????? ???????????? ?????????"}
                        content={currentSeasonData.length !== 0 ?
                            currentSeasonData.date
                            : "??? ?????? ???????????? ?????????"}
                    />
                    <TextWrap
                        title={currentSeasonData.length !== 0 ? "?????? ???????????? ??????" : "??? ?????? ???????????? ?????????"}
                        content={currentSeasonData.length !== 0 ?
                            `?????? ??????????????? ?????? ???????????? ?????? ??????????????? ???????????? ??? ?????? ???????????? ????????? ???????????????.
                            ??????????????? ????????????, ICPC Sinchon Algorithm Camp ???????????? ????????? ??? ????????????.`
                            : "??? ?????? ???????????? ?????????"}
                    />
                    <TextWrap
                        title={"?????? ??????"}
                        content={`ICPC Sinchon Algorithm Camp??? ?????? ????????? ???????????? ??????????????? ????????? ????????? ?????? ????????? ?????????.`}
                    />
                    {currentSeasonData.studies && Array.from(currentSeasonData.studies).map(study => {
                        return (
                            <TopicWrap id={study.topic} key={study.topic}>
                                {study.contests && <TopicTitle>{study.topic}</TopicTitle>}
                                <div style={{ width: `100%` }}>
                                    {study.contests && Array.from(study.contests).map(contest => {
                                        return (
                                            <>
                                                {contest.awards && <ItemWrap key={contest.contest_name + '-award'}>
                                                    <ItemTitle className="hof-item-title">{contest.contest_name} ?????????</ItemTitle>
                                                    <TableWrap>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ width: `3rem` }}>??????</th>
                                                                    <th>?????????</th>
                                                                    <th style={{ width: `10rem` }}>BOJ</th>
                                                                    <th style={{ width: `7rem` }}>??????</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {Array.from(contest.awards).map((award, idx) => {
                                                                    return (
                                                                        <tr>
                                                                            <td style={{ position: `relative` }}>{idx + 1}<sup class={idx + 1 === 1 ? `medal-gold` : idx + 1 === 2 ? `medal-silver` : `medal-bronze`}>???</sup></td>
                                                                            <td>{award.name}</td>
                                                                            <td>{award.handle}</td>
                                                                            <td>{award.school}</td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </TableWrap>
                                                </ItemWrap>}
                                                {contest.problem_list && <ItemWrap key={contest.contest_name + '-past-problem'}>
                                                    <ItemTitle className="hof-item-title">{contest.contest_name} ?????? ??????</ItemTitle>
                                                    <TableWrap>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ width: `1rem` }}>#</th>
                                                                    <th>??????</th>
                                                                    <th>?????????</th>
                                                                    <th style={{ width: `5rem` }}>??????</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {Array.from(contest.problem_list).map((problem, idx) => {
                                                                    return (
                                                                        <tr key={problem.problem_name}>
                                                                            <td>{String.fromCharCode(idx + 65)}</td>
                                                                            <td><a href={problem.link} style={{ textDecoration: 'underline' }}>{problem.problem_name}</a></td>
                                                                            <td>{problem.organizer.name}</td>
                                                                            <td>{problem.organizer.school}</td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </TableWrap>
                                                </ItemWrap>}
                                            </>
                                        )
                                    })}
                                </div>
                            </TopicWrap>
                        )
                    })}
                </ContestWrap>
            </>
        </Layout>
    )
}

CampContest.getInitialProps = async ({ window, store }) => {
    store.dispatch(setSeasonList(data1))
    store.dispatch(setCurrentSeasonData(data0))
    store.dispatch(setCurrentSeason(data0.season))
    store.dispatch(setCurrentYear(data0.year))
    store.dispatch(setCurrentSeasonIdx(data1.indexOf(process.env.NEXT_PUBLIC_CURRENT_HALLOFFAME_SEASON)))
}
export default CampContest