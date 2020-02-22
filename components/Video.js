import FlexItem from './FlexItem'
import CenteredH3 from './CenteredH3'

import styled from 'styled-components'

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
`

const Video = ({linkToVideo}) => (
    <FlexItem>
        { 
        (linkToVideo !== null) ? (
            <StyledVideo muted autoplay>
                <source src={linkToVideo}/>
            </StyledVideo>
        ) : (
            <CenteredH3>No link to video was found</CenteredH3>
        )
        }
    </FlexItem>
)

export default Video