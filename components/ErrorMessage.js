import styled from 'styled-components'

const StyledDivCenter = styled.div`
    display: inline-block;
    margin: auto auto;
    background-color: #FFD2D2;
    color: #D8000C;
`

const StyledDivError = styled.div`
    margin: 10px 0px;
    padding: 12px;
`

const ErrorMessage = ({ children }) => (
    <StyledDivCenter>
        <StyledDivError>
            <i className="fas fa-video-slash"></i>
            {children}
        </StyledDivError>
    </StyledDivCenter>
)

export default ErrorMessage