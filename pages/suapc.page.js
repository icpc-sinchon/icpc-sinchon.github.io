import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentSeasonIdx } from "../reducers/currentSeasonIdx";
import { setCurrentSeasonData } from "../reducers/currentSeasonData";
import { setCurrentYear } from "../reducers/currentYear";
import { setCurrentSeason } from "../reducers/currentSeason";
import { setSeasonList } from "../reducers/seasonList";

import Layout from "../components/Layout";
import WinnerTableWrap from "../components/WinnerTable/WinnerTableWrap";
import SeasonSwitchArrow from "../components/Arrow/SeasonSwitchArrow";
import SeasonNav from "../components/SeasonNav/SeasonNav";
import ContestWrap from "../components/ContestWrap/ContestWrap";
import TitleWrap from "../components/ContestWrap/ContestItem/TitleWrap/TitleWrap";
import TextWrap from "../components/ContestWrap/ContestItem/TextWrap/TextWrap";
import ItemWrap from "../components/ContestWrap/ContestItem/ItemWrap";
import PreviewWrap from "../components/PreviewWrap/PreviewWrap";
import ArchiveButton from "../components/ArchiveButton/ArchiveButton";
import AdmissionButton from "../components/AdmissionButton/AdmissionButton";
import ArchiveWrap from "../components/ContestWrap/ContestItem/ArchiveWrap";

const data0 = require(
  `../public/history/suapc/${process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON}.json`,
);
const data1 = require("../public/history/suapc/list.json");

const SuapcDesc = `SUAPC는 신촌지역 5개 대학(서강, 숙명, 연세, 이화, 홍익)의
 학부생 및 대학원 1년차를 대상으로 하는 프로그래밍 대회입니다. 
 대회 문제는 서울 리저널의 문제 출제 경향을 따르며 제한시간 동안 
 얼마나 많은 문제를 정확하게 풀 수 있는지를 평가하여 순위를 결정합니다.`;

const ParticipantDesc = `서강대학교, 숙명여자대학교, 연세대학교, 이화여자대학교, 홍익대학교의 재학/휴학생인 경우
누구나 참여가능합니다.\u{000d}\u{000a}
(단, 졸업 1년 차와 대학원생은 참여 가능하되, 대회 중 스코어보드에는 보여지지 않습니다.)
`;

const Suapc = () => {
  const contestWrapRef = useRef(null);
  // const registerContestBtnRef = useRef(null);
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

  const switchSeasonData = async (idx) => {
    let season = seasonList[idx];

    try {
      const data = await fetchSeasonData(season);
      dispatch(setCurrentSeasonData(data));
    } catch (err) {
      console.error(err);
    }

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
      const response = await fetch(`/history/suapc/${season}.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };

  return (
    <Layout>
      <Head>
        <title>SUAPC 2024 | ICPC Sinchon</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="SUAPC 2024 | ICPC Sinchon" />
        <meta property="og:url" content="https://icpc-sinchon.io/suapc" />
        <meta
          property="og:description"
          content="SUAPC는 신촌지역 5개 대학(서강, 숙명, 연세, 이화, 홍익)의 학부생 및 대학원 1년차를 대상으로 하는 프로그래밍 대회입니다"
        />
        <meta property="og:image" content="/res/og_image.png" />
      </Head>
      <>
        {/* <TextBubble
          text="현재 신청기간이 아닙니다."
          triggerRef={registerContestBtnRef}
        /> */}
        <SeasonNav onSeasonNavClick={onSeasonNavClick} />
        <PreviewWrap />
        <ContestWrap ref={contestWrapRef}>
          <SeasonSwitchArrow onArrowClick={onArrowClick} />
          <TitleWrap
            pageType={"suapc"}
            title={`SUAPC ${currentYear} ${currentSeason}`}
            year={currentYear}
            season={currentSeason}
          />
          {currentSeasonData.fileNames ? (
            <ArchiveWrap className="hide-if-mobile">
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.links.bojProblem)}
                href={currentSeasonData.links.bojProblem}
              >
                문제(BOJ 링크)
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.fileNames.testPdf)}
                disabledText="문제 PDF가 제공되지 않는 대회입니다."
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.testPdf}`}
              >
                문제 PDF
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.fileNames.solutionPdf)}
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.solutionPdf}`}
              >
                해설 PDF
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.links.scoreboard)}
                href={currentSeasonData.links.scoreboard}
              >
                스코어보드
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.fileNames.posterImage)}
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.posterImage}`}
              >
                공식 포스터
              </ArchiveButton>
            </ArchiveWrap>
          ) : (
            <ArchiveWrap>
              {/* for contest: apply link isn't created */}
              <AdmissionButton href="https://forms.gle/AEfLfsbXDrGxPk7C8">
                대회 신청{" "}
                <span style={{ fontSize: "smaller" }}>02/18 오후 8시까지</span>
              </AdmissionButton>
              {/* <AdmissionButton href="https://pf.kakao.com/_xehxhAK">
                대회 문의
              </AdmissionButton>
              <AdmissionButton href="https://forms.gle/9T57pnjJHi3X92aF7">
                검수진 지원{" "}
                <span style={{ fontSize: "smaller" }}>12/05부터</span>
              </AdmissionButton> */}
              <AdmissionButton
                disabled={!Boolean(currentSeasonData?.fileNames?.posterImage)}
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData?.fileNames?.posterImage}`}
              >
                공식 포스터
              </AdmissionButton>
            </ArchiveWrap>
          )}
          <TextWrap
            title="대회 일자"
            content={currentSeasonData.date}
            // isUncertain={currentYear === 2022}
          />
          <TextWrap title="대회 소개" content={SuapcDesc} />
          <TextWrap title="참여 대상" content={ParticipantDesc} />
          <ItemWrap>
            <ItemTitle>참여 대학</ItemTitle>
            <SchoolLogoWrap>
              <SchoolLogo src="/school-logo/sogang.png" />
              <SchoolLogo src="/school-logo/sookmyung.png" />
              <SchoolLogo src="/school-logo/yonsei.png" />
              <SchoolLogo src="/school-logo/ewha.png" />
              <SchoolLogo src="/school-logo/hongik.png" />
            </SchoolLogoWrap>
          </ItemWrap>
          <ItemWrap>
            <ItemTitle>후원사</ItemTitle>
            <SchoolLogoWrap
              style={{ flexWrap: "wrap", justifyContent: "start" }}
            >
              {currentSeasonData.sponsor?.map((data) => {
                return (
                  <SponsorCI
                    key={"sponsor-" + data}
                    src={`/res/sponsor-ci/${data}.png`}
                  />
                );
              })}
            </SchoolLogoWrap>
          </ItemWrap>
          {currentSeasonData.personalSponsor &&
            Array.isArray(currentSeasonData.personalSponsor) && (
              <TextWrap
                title="개인후원"
                content={currentSeasonData.personalSponsor.join(", ")}
              />
            )}
          {currentSeasonData.awards && (
            <>
              {!!currentSeasonData.awards.length && (
                <ItemWrap>
                  <ItemTitle>수상 내역</ItemTitle>
                  <WinnerTableWrap data={currentSeasonData.awards} />
                </ItemWrap>
              )}
              <div className="maker-checker-wrap">
                <ItemWrap className="maker-checker">
                  <ItemTitle>출제진</ItemTitle>
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: "8rem" }}>이름</th>
                        <th>소속</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSeasonData.examiner &&
                        Array.from(currentSeasonData.examiner).map((elem) => {
                          return (
                            <tr key={"checker-" + elem.name}>
                              <td>{elem.name}</td>
                              <td>{elem.school}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </ItemWrap>
                <ItemWrap className="maker-checker">
                  <ItemTitle>검수진</ItemTitle>
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: "8rem" }}>이름</th>
                        <th>소속</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSeasonData.checker &&
                        Array.from(currentSeasonData.checker).map((elem) => {
                          return (
                            <tr key={"maker-" + elem.name}>
                              <td>{elem.name}</td>
                              <td>{elem.school}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </ItemWrap>
              </div>
            </>
          )}

          {currentSeasonData.awards && (
            <ItemWrap className="show-if-mobile" css={ArchiveWrap}>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.links.bojProblem)}
                href={currentSeasonData.links.bojProblem}
              >
                문제(BOJ 링크)
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.fileNames.testPdf)}
                disabledText="문제 PDF가 제공되지 않는 대회입니다."
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.testPdf}`}
              >
                문제 PDF
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.fileNames.solutionPdf)}
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.solutionPdf}`}
              >
                해설 PDF
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.links.scoreboard)}
                href={currentSeasonData.links.scoreboard}
              >
                스코어보드
              </ArchiveButton>
              <ArchiveButton
                disabled={!Boolean(currentSeasonData.fileNames.posterImage)}
                href={`/res/${currentYear}${
                  currentSeason === "Winter" ? "w" : "s"
                }/${currentSeasonData.fileNames.posterImage}`}
              >
                공식 포스터
              </ArchiveButton>
            </ItemWrap>
          )}
        </ContestWrap>
      </>
    </Layout>
  );
};

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

const SchoolLogoWrap = styled.div`
  display: flex;
  overflow-x: auto;
`;

const SchoolLogo = styled.img`
  ${"" /* width: 2.7rem; */}
  height: 2.7rem;

  margin-left: 1.1rem;

  &:first-child {
    margin-left: 0;
  }
`;

const SponsorCI = styled.img`
  height: 1.6rem;

  margin: 0.8rem 1.8rem 0.6rem 0;
  ${"" /* margin-left: 1.1rem; */}

  ${
    "" /* &:first-child{
        margin-left: 0;
    } */
  }
`;
Suapc.getInitialProps = async ({ store }) => {
  store.dispatch(setCurrentSeasonData(data0));
  store.dispatch(setCurrentSeason(data0.season));
  store.dispatch(setCurrentYear(data0.year));
  store.dispatch(setSeasonList(data1));
  store.dispatch(
    setCurrentSeasonIdx(
      data1.indexOf(process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON),
    ),
  );
};

export default Suapc;
