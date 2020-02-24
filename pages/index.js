import GridDiv from '../components/GridDiv'
import Wrapper from '../components/Wrapper'
import fetch from 'isomorphic-unfetch'
import ErrorMessage from '../components/ErrorMessage'
import Multiview from '../components/Multiview'
import React, { componentDidMount, useState, useEffect } from 'react'

const Index = () => {
    const [videos, setVideos] = useState([])

    const fetchVideos = async () => {
        const response = await fetch('http://localhost:3001/streamfiles/')

        const data = await response.json()

        setVideos(data)
        console.log(`${new Date()} Fetch Videos: ${JSON.stringify(data)}`)

    }

    useEffect(() => {
        setTimeout(() => {
            fetchVideos(videos)
        }, 1000)
    }, [videos])

    return (
        <Wrapper>
            {
                (videos.Message || videos === []) ? (
                    <ErrorMessage>Oh noooo</ErrorMessage>
                ) : (
                        <Multiview data={videos}></Multiview>
                    )
            }
        </Wrapper>
    )
}

export default Index