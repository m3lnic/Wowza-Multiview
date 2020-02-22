import styled from 'styled-components'

const StyledH3 = styled.h3`
    text-align: center;
`

const CenteredH3 = ({children}) => (
    <StyledH3>
        {children}
    </StyledH3>
)

export default CenteredH3