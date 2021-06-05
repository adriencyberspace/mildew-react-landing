import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 100px;
    margin: 60px auto 20px;
    width: fit-content;
    font-weight: 400;
`

const Blurb = styled.h4`
    margin: 0px auto;
    width: fit-content;
    font-size: 24px;
    margin-bottom: 20px;
`

const P = styled.p`
    margin: 0px auto;
    width: fit-content;
    max-width: 60%;
`

const Home = () => {

    return (
        <div className="content-container">
            <div>
                <Title>Mildew</Title>
                <Blurb>Not new, but original.</Blurb>
                <P>
                    I love things that age well - things that don't date, that stand the test of time and that become living examples of the absolute best. The great thing about fashion is that it always looks forward. Never in my wildest dreams did I entertain the idea that I would become a fashion designer. In a meat-eating world, wearing leather for shoes and clothes and even handbags, the discussion of fur is childish. Doing collections, doing fashion is like a non-stop dialogue.
                </P>
            </div>
        </div>

    );

}

export { Home };
