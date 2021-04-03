import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'


const SeasonNav = ({ onSeasonNavClick }) => {
    const seasonList = useSelector(state => state.seasonList)
    const currentSeasonIdx = useSelector(state => state.currentSeasonIdx)

    return (
        <SeasonNavWrap>
            {seasonList.map((elem, idx) => {
                return (
                    <SeasonNavElem onClick={onSeasonNavClick} alt={idx} className={"season-nav " + (idx === currentSeasonIdx ? 'season-selected' : "")} > {elem}</SeasonNavElem>
                )
            })}
        </SeasonNavWrap>
    )
}

const KeepCalmPreset = css`
    font-family: 'KeepCalmMed';
    font-weight: normal;
`

const SeasonNavWrap = styled.div`
    padding: 18px 0 38px 0;
    
    display: flex;

    white-space: nowrap;
    overflow-x: auto;
`

const SeasonNavElem = styled.div`
    ${KeepCalmPreset}
    color: #C8C8C8;

    margin-left: 2.3rem;
    font-size: 0.85rem;
    cursor: pointer;

    &:first-child{
        margin-left: 3.2rem;
    }
`

export default SeasonNav