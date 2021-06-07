import React from 'react'
import { Subscribe } from './Subscribe'
import { Blurb, P } from './Content'

const Home = () => {
    const marginTop20 = {
        marginTop: 20
    }

    const marginBottom20 = {
        marginBottom: 20
    }

    return (
        <div className="content-container">
            <div>
                <Blurb> The secondhand fashion magazine.</Blurb>
                <P style={marginBottom20}> In print Spring 2022. </P>   
            </div>
            <P style={marginBottom20}> Stay in the loop:</P>
            <Subscribe />
            <P style={marginTop20}>@mildewmag</P>
            <P style={marginTop20}>mildewmag@gmail.com</P>
        </div>
    )
}

export { Home }
