import { useEffect, useRef } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import { setCurrentSeasonIdx } from "../reducers/currentSeasonIdx";
import { setCurrentSeasonData } from "../reducers/currentSeasonData";
import { setCurrentYear } from "../reducers/currentYear";
import { setCurrentSeason } from "../reducers/currentSeason";
import { setSeasonList } from "../reducers/seasonList";

import SeasonSwitchArrow from "../components/Arrow/SeasonSwitchArrow";
import TextWrap from "../components/ContestWrap/ContestItem/TextWrap/TextWrap";
import TitleWrap from "../components/ContestWrap/ContestItem/TitleWrap/TitleWrap";
import ContestWrap from "../components/ContestWrap/ContestWrap";
import Layout from "../components/Layout";
import PreviewWrap from "../components/PreviewWrap/PreviewWrap";
import SeasonNav from "../components/SeasonNav/SeasonNav";
import ItemWrap from "../components/ContestWrap/ContestItem/ItemWrap";
import ArchiveButton from "../components/ArchiveButton/ArchiveButton";
import ArchiveWrap from "../components/ContestWrap/ContestItem/ArchiveWrap";

const data0 = require(
  `../public/history/halloffame/${process.env.NEXT_PUBLIC_CURRENT_HALLOFFAME_SEASON}.json`,
);
const data1 = require("../public/history/halloffame/list.json");

const BoldText = css`
  font-weight: 700;
`;

const SinchonColor = css`
  color: #009d3e;
`;

const ItemTitle = styled.h3`
  ${BoldText}
  ${SinchonColor}

    margin: 1em 0 0.4em 0;
`;

const TopicTitle = styled.h3`
  ${BoldText}
  ${SinchonColor}

    width: 3rem;
  margin: 1em 0.3rem 0.4em 0;

  text-align: center;
  align-self: baseline;

  background-color: #23a33d;
  color: white;

  border-radius: 0.4rem;
`;

const TopicWrap = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: block;

    padding: 0.8rem 0;
  }
`;

const TableWrap = styled.div`
  overflow-x: auto;
  white-space: nowrap;
`;

const CampContest = ({ seasonList_, seasonData_ }) => {
  const title = "ICPC Sinchon Camp Contest";

  const contestWrapRef = useRef(null);
  const dispatch = useDispatch();
  const currentSeasonIdx = useSelector((state) => state.currentSeasonIdx);
  const currentSeasonData = useSelector((state) => state.currentSeasonData);
  const currentYear = useSelector((state) => state.currentYear);
  const currentSeason = useSelector((state) => state.currentSeason);
  const seasonList = useSelector((state) => state.seasonList);

  useEffect(() => {
    if (!contestWrapRef.current) return;
    adjustPreviewWrapHeight();
  });

  const adjustPreviewWrapHeight = () => {
    const previewContainer = document.querySelectorAll(".preview-container");
    const contestWrapBoundary =
      contestWrapRef?.current?.getBoundingClientRect();
    previewContainer.forEach((ele) => {
      ele.style.height = contestWrapBoundary.height + "px";
    });
  };

  const onSeasonNavClick = (e) => {
    let idx = parseInt(e.target.getAttribute("alt"));
    switchSeasonData(idx);
  };

  const onArrowClick = (e) => {
    let alt = e.target.getAttribute("alt");
    let l_r = -1;
    if (alt === "right-arrow") l_r = 1;

    if (!seasonList[l_r + currentSeasonIdx]) return;

    switchSeasonData(l_r + currentSeasonIdx);
  };

  const switchSeasonData = (idx) => {
    let season = seasonList[idx];

    fetchSeasonData(season).then((data) => {
      dispatch(setCurrentSeasonData(data));
    });

    dispatch(setCurrentYear(season.split(" ")[0]));
    dispatch(setCurrentSeason(season.split(" ")[1]));
    dispatch(setCurrentSeasonIdx(idx));

    adjustSelectedNav(idx);
  };

  const adjustSelectedNav = (idx) => {
    document.querySelectorAll(".season-nav").forEach((ele) => {
      // eslint-disable-next-line eqeqeq
      if (ele.getAttribute("alt") == idx) {
        ele.classList.add("season-selected");
      } else {
        ele.classList.remove("season-selected");
      }
    });
  };

  const fetchSeasonData = async (season) => {
    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/history/halloffame/${season}.json`,
      );
      let data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  return (
    <Layout>
      <Head>
        <title>Camp Contest | ICPC Sinchon</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="Camp Contest | ICPC Sinchon" />
        <meta property="og:url" content="https://icpc-sinchon.io/campcontest" />
        <meta property="og:description" content="ICPC Sinchon Camp Contest" />
        <meta property="og:image" content="/res/c-4.jpg" />
      </Head>
      <>
        <SeasonNav onSeasonNavClick={onSeasonNavClick} />
        <PreviewWrap />
        <ContestWrap ref={contestWrapRef}>
          <SeasonSwitchArrow onArrowClick={onArrowClick} />
          <TitleWrap
            pageType={"campcontest"}
            title={title}
            year={currentYear}
            season={currentSeason}
          />
          {currentSeasonData.fileNames && (
            <ArchiveWrap className="hide-if-mobile">
              <ArchiveButton href={currentSeasonData.links[0]}>
                문제(BOJ 링크)
              </ArchiveButton>
              <ArchiveButton
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.solutionPdf}`}
              >
                해설 PDF
              </ArchiveButton>
              <ArchiveButton href={currentSeasonData.links[1]}>
                초급 스코어보드
              </ArchiveButton>
              <ArchiveButton href={currentSeasonData.links[2]}>
                중급 스코어보드
              </ArchiveButton>
            </ArchiveWrap>
          )}
          <TextWrap
            title={"콘테스트 일자"}
            content={
              currentSeasonData.length !== 0 && currentSeasonData.date
                ? currentSeasonData.date
                : "이번 시즌에는 Camp Contest가 진행되지 않았습니다. 다음 시즌을 기대해 주세요."
            }
          />
          <TextWrap
            title={"캠프 콘테스트 소개"}
            content={`캠프 콘테스트는 캠프 기간동안 배운 알고리즘을 적용해볼 수 있는 모의고사 형식의 대회입니다.
                            개인전으로 진행되며, ICPC Sinchon Algorithm Camp 참가자만 참여할 수 있습니다.`}
          />
          <TextWrap
            title={"출제 경향"}
            content={
              "ICPC Sinchon Algorithm Camp을 통해 학습한 대부분의 알고리즘을 문제로 다루는 것을 목표로 합니다."
            }
          />
          {currentSeasonData.studies &&
            Array.from(currentSeasonData.studies).map((study) => {
              return (
                <TopicWrap id={study.topic} key={study.topic}>
                  {study.contests && <TopicTitle>{study.topic}</TopicTitle>}
                  <div style={{ width: "100%" }}>
                    {study.contests &&
                      Array.from(study.contests).map((contest, idx) => {
                        return (
                          <div key={idx}>
                            {contest.awards && (
                              <ItemWrap key={contest.contest_name + "-award"}>
                                <ItemTitle className="hof-item-title">
                                  {contest.contest_name} 수상자
                                </ItemTitle>
                                <TableWrap>
                                  <table>
                                    <thead>
                                      <tr>
                                        <th style={{ width: "3rem" }}>순위</th>
                                        <th>수상자</th>
                                        <th style={{ width: "10rem" }}>BOJ</th>
                                        <th style={{ width: "7rem" }}>소속</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Array.from(contest.awards).map(
                                        (award, idx) => {
                                          return (
                                            <tr
                                              key={`${award.name}-${award.school}`}
                                            >
                                              <td
                                                style={{ position: "relative" }}
                                              >
                                                {idx + 1}
                                                {idx + 1 <= 3 && (
                                                  <sup
                                                    className={
                                                      idx + 1 === 1
                                                        ? "medal-gold"
                                                        : idx + 1 === 2
                                                        ? "medal-silver"
                                                        : "medal-bronze"
                                                    }
                                                  >
                                                    ●
                                                  </sup>
                                                )}
                                              </td>
                                              <td>{award.name}</td>
                                              <td>
                                                <a
                                                  target="_blank"
                                                  style={{
                                                    textDecoration: "underline",
                                                  }}
                                                  href={`https://acmicpc.net/user/${award.handle}`}
                                                  rel="noreferrer"
                                                >
                                                  {award.handle}
                                                </a>
                                              </td>
                                              <td>{award.school}</td>
                                            </tr>
                                          );
                                        },
                                      )}
                                    </tbody>
                                  </table>
                                </TableWrap>
                              </ItemWrap>
                            )}
                            {contest.problem_list && (
                              <ItemWrap
                                key={contest.contest_name + "-past-problem"}
                              >
                                <ItemTitle className="hof-item-title">
                                  {contest.contest_name} 기출 문항
                                </ItemTitle>
                                <TableWrap>
                                  <table>
                                    <thead>
                                      <tr>
                                        <th style={{ width: "1rem" }}>#</th>
                                        <th>문제</th>
                                        <th>출제자</th>
                                        <th style={{ width: "5rem" }}>소속</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Array.from(contest.problem_list).map(
                                        (problem, idx) => {
                                          return (
                                            <tr key={problem.problem_name}>
                                              <td>
                                                {String.fromCharCode(idx + 65)}
                                              </td>
                                              <td>
                                                <a
                                                  target="_blank"
                                                  href={problem.link}
                                                  style={{
                                                    textDecoration: "underline",
                                                  }}
                                                  rel="noreferrer"
                                                >
                                                  {problem.problem_name}
                                                </a>
                                              </td>
                                              <td>{problem.organizer.name}</td>
                                              <td>
                                                {problem.organizer.school}
                                              </td>
                                            </tr>
                                          );
                                        },
                                      )}
                                    </tbody>
                                  </table>
                                </TableWrap>
                              </ItemWrap>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </TopicWrap>
              );
            })}
          {currentSeasonData.fileNames && (
            <ItemWrap className="show-if-mobile" css={ArchiveWrap}>
              <ArchiveButton href={currentSeasonData.links[0]}>
                문제(BOJ 링크)
              </ArchiveButton>
              <ArchiveButton
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.solutionPdf}`}
              >
                해설 PDF
              </ArchiveButton>
              <ArchiveButton href={currentSeasonData.links[1]}>
                초급 스코어보드
              </ArchiveButton>
              <ArchiveButton href={currentSeasonData.links[2]}>
                중급 스코어보드
              </ArchiveButton>
            </ItemWrap>
          )}
        </ContestWrap>
      </>
    </Layout>
  );
};

CampContest.getInitialProps = async ({ window, store }) => {
  store.dispatch(setSeasonList(data1));
  store.dispatch(setCurrentSeasonData(data0));
  store.dispatch(setCurrentSeason(data0.season));
  store.dispatch(setCurrentYear(data0.year));
  store.dispatch(
    setCurrentSeasonIdx(
      data1.indexOf(process.env.NEXT_PUBLIC_CURRENT_HALLOFFAME_SEASON),
    ),
  );
};
export default CampContest;
