import Layout from "../components/Layout";
import Head from "next/head";
import { useState } from "react";

import SponsorNav from "../components/SponsorNav/SponsorNav";
import CorporateSponsorship from "../components/Sponsor/CorporateSponsorship";
import PersonalSponsorship from "../components/Sponsor/PersonalSponsorship";

const Sponsor = () => {
  const [currentSponsorIdx, setCurrentSponsorIdx] = useState(0);

  const onSponsorNavClick = (idx) => {
    setCurrentSponsorIdx(idx);
  };

  return (
    <Layout>
      <Head>
        <title>Sponsor | ICPC Sinchon</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="Sponsor | ICPC Sinchon" />
        <meta property="og:url" content="https://icpc-sinchon.io/sponsor" />
        <meta
          property="og:description"
          content="매 시즌 신촌지역 5개 대학의 컴퓨터공학 전공생들을 대상으로 이루어지는 연합 활동의 후원사로 참여하여 기업 홍보 효과를 누리세요."
        />
        <meta property="og:image" content="/res/og_image.png" />
      </Head>
      <SponsorNav
        onSponsorNavClick={onSponsorNavClick}
        currentSponsorIdx={currentSponsorIdx}
      />
      {currentSponsorIdx === 0 && <CorporateSponsorship />}
      {currentSponsorIdx === 1 && <PersonalSponsorship />}
    </Layout>
  );
};

export default Sponsor;
