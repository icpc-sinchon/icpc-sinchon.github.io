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
    padding: 1rem 0 2.4rem 0;
    
    display: flex;

    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar{
        display: none;
    }

    @media(max-width: 500px){
        padding: 1rem 0 1.2rem 0;
    }
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