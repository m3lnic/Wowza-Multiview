import Video from './Video'

const Multiview = ({ links }) => (
    links.map((value) => (
        <Video linkToVideo={value}></Video>
    ))
)

export default Multiview