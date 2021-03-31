import styled, { css } from 'styled-components'

const SeasonSwitchArrow = ({onArrowClick}) => {
    return <ArrowWrap>
        <ArrowLeft onClick={onArrowClick} alt="left-arrow" src="res/button/arrow-left.svg" />
        <ArrowRight onClick={onArrowClick} alt="right-arrow" src="res/button/arrow-right.svg" />
    </ArrowWrap>
}

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

export default SeasonSwitchArrow;