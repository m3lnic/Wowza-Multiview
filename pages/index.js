import GridDiv from '../components/GridDiv'
import FlexItem from '../components/FlexItem'
import Video from '../components/Video'
import Wrapper from '../components/Wrapper'
import fetch from 'isomorphic-unfetch'
import CenteredH3 from '../components/CenteredH3'
import Multiview from '../components/Multiview'

const Index = (props) => {
    return (
        <Wrapper>
            {
                (!props.data.message) ? (
                    <GridDiv>
                        <Multiview links={props.data.links}></Multiview>
                    </GridDiv>
                ) : (
                    <CenteredH3>Oh noooo! There are no streams currently!</CenteredH3>
                )
            }

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