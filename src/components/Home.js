import React from 'react'
import { Subscribe } from './Subscribe'
import { A, Blurb, BlurbDiv, P } from './Content'

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
                <BlurbDiv>
                    <Blurb> The secondhand fashion magazine.</Blurb>
                </BlurbDiv>
                <P style={marginBottom20}> In print Spring 2022. </P>   
            </div>
            <P style={marginBottom20}> Stay in the loop:</P>
            <Subscribe />
            <P style={marginTop20}><A rel="noreferrer" target="_blank" href="https://www.instagram.com/mildewmag">@mildewmag</A></P>
            <P style={marginTop20}><A rel="noreferrer" target="_blank" href="mailto:mildewmag@gmail.com">mildewmag@gmail.com</A></P>
        </div>
    )
}

export { Home }
