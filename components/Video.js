import FlexItem from './FlexItem'
import CenteredH3 from './CenteredH3'
import ReactPlayer from 'react-player'

const localStyle = {
    "object-fit": "cover"
}

const Video = ({ linkToVideo }) => (
    <ReactPlayer url={linkToVideo} playing muted style={localStyle}></ReactPlayer>
)

export default Video