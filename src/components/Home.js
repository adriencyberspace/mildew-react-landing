import React from 'react'
import { Subscribe } from './Subscribe'
import { Blurb, P } from './Content'

const Home = () => {
    return (
        <div className="content-container">
            <div>
                <Blurb>Not new, but original.</Blurb>
                <P>
                    I love things that age well - things that don't date, that stand the test of time and that become living examples of the absolute best. The great thing about fashion is that it always looks forward. Never in my wildest dreams did I entertain the idea that I would become a fashion designer. In a meat-eating world, wearing leather for shoes and clothes and even handbags, the discussion of fur is childish. Doing collections, doing fashion is like a non-stop dialogue.
                </P>
            </div>
            <Subscribe />
        </div>
    )
}

export { Home }
