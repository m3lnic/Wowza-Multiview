import styled from 'styled-components'

const StyledFlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: stretch;
`

const FlexDiv = ({ children }) => (
    <StyledFlexDiv>
        {children}
    </StyledFlexDiv>
)

export default FlexDiv