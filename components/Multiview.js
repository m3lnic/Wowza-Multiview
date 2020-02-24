import Video from './Video'

const Multiview = ({ links }) => {
    if (links === undefined)
        return null;

    return (
        links.map((value) => (
            <Video linkToVideo={value}></Video>
        ))
    )
}

export default Multiview