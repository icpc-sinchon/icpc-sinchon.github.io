import styled from 'styled-components'

const CustomButton = styled.div`
    border: 2px solid #009D3E;
    
    padding: 0.4rem 1.2rem;
    
    font-family: 'Noto Sans KR';
    font-size: 0.8rem;
    font-weight: 700;
    color: #009D3E;

	@media (max-width: 633px) {
        border: none;
        padding: 0.2rem 0;
    }
`

const ATag = styled.a`
    margin-left: 1.2rem;
        
    &:first-child{
        margin-left: 0;
    }

    &:hover{
        text-decoration: none;
    }

	@media (max-width: 633px) {
        margin-left: 0;
    }
`

const ArchiveButton = ({ href, children }) => {
    return (
        <ATag href={href} target="_blank">
            <CustomButton>
                {children}
            </CustomButton>
        </ATag>
    )
}

export default ArchiveButton