import styled, { css } from 'styled-components'
import ItemWrap from '../ItemWrap'

const SinchonColor = css`color: #009D3E;`
const NotoSansBold = css`
    font-family: 'Noto Sans KR';
    font-weight: 700;
`
const KeepCalmPreset = css`
    font-family: 'KeepCalmMed';
    font-weight: normal;
`

const ItemTitle = styled.h3`
    ${NotoSansBold}
    ${SinchonColor}

    margin: 1em 0 0.4em 0;
`

const ItemContent = styled.p`
    font-family: 'Noto Sans KR';
    font-weight: 500;

    margin: 0;
	@media (max-width: 633px) {
        font-size: 0.9rem;
    }
`

const TextWrap = ({ title, content }) => {
    return (
        <ItemWrap>
            <ItemTitle>{title}</ItemTitle>
            <ItemContent>{content}</ItemContent>
        </ItemWrap>
    )
}

export default TextWrap