import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

const PreviewWrap = () => {

    const currentSeasonIdx = useSelector(state => state.currentSeasonIdx)
    const seasonList = useSelector(state=>state.seasonList)

    const showLeftPreview = currentSeasonIdx !== 0
    const showRightPreview = currentSeasonIdx !== seasonList.length - 1

    
    const LeftPreview = styled.div`
        position: absolute;
        left: calc(50% - 520px - 130px - 57px);
        transform: translateX(-100%);

        width: calc(1150px - 520px - 130px - 57px);
        height: 100%;
        margin: 0 auto 3rem auto;
        padding: 3rem 4rem;

        border: 3px solid #009D3E;
        border-left: none;

        ${!showLeftPreview ? VisibilityHide : ""}
    `

    const RightPreview = styled.div`
        position: absolute;
        right: calc(50% - 520px - 130px - 57px);
        transform: translateX(+100%);

        width: calc(1150px - 520px - 130px - 57px);
        height: 100%;
        margin: 0 auto 3rem auto;
        padding: 3rem 4rem;

        border: 3px solid #009D3E;
        border-right: none;

        ${!showRightPreview ? VisibilityHide : ""}
    `

    return (
        <>
            <LeftPreview className={"preview-container"} />
            <RightPreview className={"preview-container"} />
        </>
    )
}

export default PreviewWrap

const VisibilityHide = css`
	visibility: hidden;
`
