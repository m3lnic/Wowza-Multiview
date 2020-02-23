import FlexItem from './FlexItem'
import CenteredH3 from './CenteredH3'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const localStyle = {
    "height": "auto",
    "width": "100%"
}

const StyledVideoContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 5px solid #292929;
`

const Video = ({ linkToVideo }) => (
    <StyledVideoContainer>
        <ReactPlayer url={linkToVideo} playing muted style={localStyle} playsinline width="100%" height="100%"></ReactPlayer>
    </StyledVideoContainer>
)

export default Video