import styled, { css } from 'styled-components'

const SinchonColor = css`color: #009D3E;`
const NotoSansBold = css`
    font-family: 'Noto Sans KR';
    font-weight: 700;
`
const KeepCalmPreset = css`
    font-family: 'KeepCalmMed';
    font-weight: normal;
`

const TitleWrap_ = styled.div`

`

const Title = styled.h1`
    ${KeepCalmPreset}
    ${SinchonColor}
    font-size: 2.6em;
    letter-spacing: -1.2px;
    
    line-height: 1.2;
    
    margin: 0;
`

const SubTitle = styled.p`
    margin: 0 0 3.2rem 0;
`

const TitleWrap = ({ title, isSuapc, year, season }) => {
    return (
        <TitleWrap_>
            <Title>{title}</Title>
            {isSuapc ?
                <SubTitle css={NotoSansBold}>{year} 신촌지역 대학교 프로그래밍 동아리 연합 {season === "Winter" ? "겨울" : "여름"} 대회</SubTitle>
                :
                <SubTitle css={SinchonColor}>{year} ICPC Sinchon {season} Algorithm Camp Contest</SubTitle>
            }
        </TitleWrap_>
    )
}

export default TitleWrap