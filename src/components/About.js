import React from 'react'
import { P } from './Content'

const About = () => {
    const marginTop20 = {
        marginTop: 20
    }
    
    return (
        <div className="content-container">
            <div>
                <P style={marginTop20}>Mildew is a secondhand fashion magazine published in print twice a year.</P>
                <P style={marginTop20}>Mildew is the voice of the new-to-you fashion ecosystem, shaping perspectives around the possibilities for used clothes through forward-looking editorials, playful storytelling, and how-to’s for ethical and experimental dressing. As an inclusive and artful print platform for secondhand fashion, each issue is a radical guide to reveling in the decay of fashion as we knew it.</P>
                <P style={marginTop20}>Not new, but original.</P>
                <P style={marginTop20}>In print Spring 2022.</P>
            </div>
        </div>

    )

}

export { About }
