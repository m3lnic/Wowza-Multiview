import styled from 'styled-components'

const StyledFlexItem = styled.div`
    min-width: 50%;
    min-height: 50%; 
`

const FlexItem = ({children}) => (
    <StyledFlexItem>
        {children}
    </StyledFlexItem>
)

export default FlexItem