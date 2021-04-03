import styled from 'styled-components'

const ItemWrap_ = styled.div`
    padding-bottom: 1rem;
`

const ItemWrap = ({ children, className, style }) => {
    return (<ItemWrap_ className={className} style={style} >
        {children}
    </ItemWrap_>)
}

export default ItemWrap