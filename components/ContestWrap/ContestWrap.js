import { forwardRef } from 'react'
import styled from 'styled-components'
const sinchonColor = `#009D3E`

const ContestWrap_ = styled.div`
    position: relative;

    width: 1043px;
    height: auto;
    border: 3px solid ${sinchonColor};

    margin: 0 auto 6rem auto;
    padding: 3.6rem 4.4rem 4.4rem 4.4rem;

    @media(max-width: 500px){
        margin: 0 auto 2rem auto;
    }
`

const ContestWrap = forwardRef(({ children }, ref) => {
    return (
        <ContestWrap_ className={"contest-wrap slide-up"} ref={ref}>
            {children}
        </ContestWrap_>
    )
})

export default ContestWrap