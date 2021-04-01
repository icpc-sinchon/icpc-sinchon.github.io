import styled from 'styled-components'
const sinchonColor = `#009D3E`

const ContestWrap_ = styled.div`
    position: relative;

    width: 1043px;
    height: auto;
    border: 3px solid ${sinchonColor};

    margin: 0 auto 3rem auto;
    padding: 3rem 4rem;
`

const ContestWrap = ({ children }) => {
    return (
        <ContestWrap_>
            {children}
        </ContestWrap_>
    )
}

export default ContestWrap