import styled from 'styled-components'

const ItemWrap_ = styled.div`
    padding-bottom: 1rem;
`

const ItemWrap = ({ children }) => {
    return (<ItemWrap_>
        {children}
    </ItemWrap_>)
}

export default ItemWrap