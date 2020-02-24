import App from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import globalCss from '../utilities/global-css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

class AppWrapper extends App {
    render() {
        const GlobalCSS = createGlobalStyle`
            ${globalCss}
        `
        const { Component, pageProps } = this.props
        return (
            <>
                <GlobalCSS />
                <Component {...pageProps} />
            </>
        )
    }
}

export default AppWrapper