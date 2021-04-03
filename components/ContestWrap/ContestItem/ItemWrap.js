import styled from 'styled-components'

const ItemWrap_ = styled.div`
    padding-bottom: 1rem;
`

const ItemWrap = ({ children, style }) => {
    return (<ItemWrap_ style={style}>
        {children}
    </ItemWrap_>)
}

export default ItemWrap