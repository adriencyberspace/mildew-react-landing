import React from 'react'
import Mailchimp from './Mailchimp'
import { A, Blurb, BlurbDiv, P } from './Content'
import styled from 'styled-components'

const Span = styled.span`
    @media (min-width: 800px){
        display: none;
    }
`


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
                <Mailchimp />
            <Span>
                <P style={marginTop20}><A rel="noreferrer" target="_blank" href="https://www.instagram.com/mildewmag">@mildewmag</A></P>
                <P style={marginTop20}><A rel="noreferrer" target="_blank" href="mailto:mildewmag@gmail.com">mildewmag@gmail.com</A></P>
            </Span>
        </div>
    )
}

export { Home }
