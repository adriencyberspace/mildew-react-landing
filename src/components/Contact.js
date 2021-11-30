import React from 'react'
import { Blurb, BlurbDiv, P, A } from './Content'

const Contact = () => {
    const marginTop20 = {
        marginTop: 20
    }

    return (
        <div className="content-container">
            <div>
                <BlurbDiv>
                    <Blurb>Contact Mildew!</Blurb>
                </BlurbDiv>
                <P style={marginTop20}><A rel="noreferrer" target="_blank" href="https://www.instagram.com/mildewmag">@mildewmag</A></P>
                <P style={marginTop20}><A rel="noreferrer" target="_blank" href="mailto:mildewmag@gmail.com">mildewmag@gmail.com</A></P>
            </div>
        </div>

    )

}

export { Contact }


