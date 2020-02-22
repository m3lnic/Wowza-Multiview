import styled from 'styled-components'

const StyledFlexItem = styled.div`
    min-width: 25%;
    min-height: 25%; 
    flex-grow: 1;
`

const FlexItem = ({children}) => (
    <StyledFlexItem>
        {children}
    </StyledFlexItem>
)

export default FlexItem