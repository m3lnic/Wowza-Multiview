import styled from 'styled-components'

const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    position: absolute;
    text-align: center;
`

const Wrapper = ({ children }) => (
    <StyledWrapper>
        {children}
    </StyledWrapper>
)

export default Wrapper