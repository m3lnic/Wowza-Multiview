import styled from 'styled-components'

const StyledGridDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    background-color: #121212;
`

const GridDiv = ({children}) => (
    <StyledGridDiv>
        {children}
    </StyledGridDiv>
)

export default GridDiv