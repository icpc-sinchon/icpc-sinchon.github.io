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
import ManagementTeamTable from "../components/ManagementTeamTable/ManagementTeamTable";
import organizer from "../public/history/organizer.json";

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

const HallOfFame = () => {
  const title = "HALL OF FAME";

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
        <title>Hall Of Fame | ICPC Sinchon</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="Hall Of Fame | ICPC Sinchon" />
        <meta property="og:url" content="https://icpc-sinchon.io/halloffame" />
        <meta property="og:description" content="ICPC Sinchon 명예의 전당" />
        <meta property="og:image" content="/res/c-4.jpg" />
      </Head>
      <>
        <SeasonNav onSeasonNavClick={onSeasonNavClick} />
        <PreviewWrap />
        <ContestWrap ref={contestWrapRef}>
          <SeasonSwitchArrow onArrowClick={onArrowClick} />
          <TitleWrap
            pageType={"halloffame"}
            title={title}
            year={currentYear}
            season={currentSeason}
          />
          <TextWrap
            title={
              currentSeasonData.length !== 0
                ? "명예의 전당 소개"
                : "이 곳의 주인공이 되세요"
            }
            content={
              currentSeasonData.length !== 0
                ? "ICPC Sinchon에서 SUAPC, Algorithm Camp의 운영을 맡아 주신 운영진 분들과 Algorithm Camp에서 강의와 멘토 활동으로 기여해주신 분들을 기립니다."
                : "이 곳의 주인공이 되세요"
            }
          />
          <>
            <ItemWrap>
              {organizer.filter(
                (item) =>
                  item.year === parseInt(currentYear) &&
                  item.season === currentSeason,
              ).length > 0 && (
                <div>
                  <ItemTitle>운영진</ItemTitle>
                  <ManagementTeamTable
                    data={organizer.filter(
                      (item) =>
                        item.year === parseInt(currentYear) &&
                        item.season === currentSeason,
                    )}
                  />
                </div>
              )}
            </ItemWrap>
          </>

          {currentSeasonData.studies &&
            Array.from(currentSeasonData.studies).map((study) => {
              return (
                <TopicWrap id={study.topic} key={study.topic}>
                  <TopicTitle>{study.topic}</TopicTitle>
                  <div style={{ width: "100%" }}>
                    {study.lecturers && (
                      <ItemWrap className="lecturer-wrap">
                        <ItemTitle className="hof-item-title">
                          강사진 및 멘토
                        </ItemTitle>
                        <TableWrap>
                          <table>
                            <thead>
                              <tr>
                                <th style={{ width: "7rem" }}>분류</th>
                                <th>이름</th>
                                <th style={{ width: "10rem" }}>BOJ</th>
                                <th style={{ width: "7rem" }}>소속</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.from(study.lecturers).map((lecturer) => {
                                return (
                                  <tr key={"lecturer-" + lecturer.name}>
                                    <td>강사</td>
                                    <td>{lecturer.name}</td>
                                    <td>
                                      <a
                                        target="_blank"
                                        style={{
                                          textDecoration: "underline",
                                        }}
                                        href={`https://acmicpc.net/user/${lecturer.handle}`}
                                        rel="noreferrer"
                                      >
                                        {lecturer.handle}
                                      </a>
                                    </td>
                                    <td>{lecturer.school}</td>
                                  </tr>
                                );
                              })}
                              {study.mentors &&
                                Array.from(study.mentors).map((lecturer) => {
                                  return (
                                    <tr key={"mentor-" + lecturer.name}>
                                      <td>멘토</td>
                                      <td>{lecturer.name}</td>
                                      <td>
                                        <a
                                          target="_blank"
                                          style={{
                                            textDecoration: "underline",
                                          }}
                                          href={`https://acmicpc.net/user/${lecturer.handle}`}
                                          rel="noreferrer"
                                        >
                                          {lecturer.handle}
                                        </a>
                                      </td>
                                      <td>{lecturer.school}</td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </TableWrap>
                      </ItemWrap>
                    )}
                    <ItemWrap>
                      <ItemTitle>커리큘럼</ItemTitle>
                      {study.curriculum ? (
                        <TableWrap>
                          <table>
                            <thead>
                              <tr>
                                <th style={{ width: "7rem" }}>주차</th>
                                <th>강의 알고리즘</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.from(study.curriculum).map(
                                (curri, idx) => {
                                  return (
                                    <tr key={curri}>
                                      <td>{idx + 1}회차</td>
                                      <td>{curri}</td>
                                    </tr>
                                  );
                                },
                              )}
                            </tbody>
                          </table>
                        </TableWrap>
                      ) : (
                        "업데이트 예정입니다."
                      )}
                    </ItemWrap>
                  </div>
                </TopicWrap>
              );
            })}
        </ContestWrap>
      </>
    </Layout>
  );
};

HallOfFame.getInitialProps = async ({ window, store }) => {
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
export default HallOfFame;
