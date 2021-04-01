import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

const SeasonSwitchArrow = ({ onArrowClick }) => {
    
    const seasonList = useSelector(state=>state.seasonList)
    const currentSeasonIdx = useSelector(state => state.currentSeasonIdx)

    const showLeftArrow = currentSeasonIdx !== 0
    const showRightArrow = currentSeasonIdx !== seasonList.length - 1

    const ArrowLeft = styled.img`
        ${Arrow}
        ${!showLeftArrow ? VisibilityHide : ""}
    `

    const ArrowRight = styled.img`
        ${Arrow}
        ${!showRightArrow ? VisibilityHide : ""}
    `

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
const VisibilityHide = css`
	visibility:hidden;
`

const Arrow = css`
    cursor:pointer;
`


export default SeasonSwitchArrow;