import FlexDiv from '../components/FlexDiv'
import FlexItem from '../components/FlexItem'
import Video from '../components/Video'
import Wrapper from '../components/Wrapper'
import fetch from 'isomorphic-unfetch'
import CenteredH3 from '../components/CenteredH3'

const Index = (props) => {
    return (
        <Wrapper>
            <FlexDiv>
            {
                (!props.data.message) ? (
                    props.data.links.map(value => {
                        return (
                            <FlexItem>
                                <Video linkToVideo={value}></Video>
                            </FlexItem>
                        )
                    })
                ) : (
                        <CenteredH3>Oh noooo! There are no streams currently!</CenteredH3>
                    )
            }
            </FlexDiv>
        </Wrapper>
    )
}

Index.getInitialProps = async function () {
    const response = await fetch('http://localhost:3001/streamfiles/')

    console.log(response)

    const data = await response.json()

    console.log(data)

    return {
        data
    }
}

export default Index