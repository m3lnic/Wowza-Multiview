import styled from 'styled-components'

const StyledH3 = styled.h3`
    width: 100%;
    text-align: center;
    padding-top: 25%;
    font-size: 25pt;
`

const CenteredH3 = ({children}) => (
    <StyledH3>
        {children}
    </StyledH3>
)

export default CenteredH3