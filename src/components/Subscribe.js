import React from 'react'
import styled from 'styled-components'
import { Blurb } from './Content'

const Container = styled.div`
  width: fit-content;
  margin: auto;
`

const Subscribe = () => {
  const hidden = {
    display: 'none'
  }

  const noBackground = {
    background: 'none',
    marginBottom: 10,
    padding: 10,
    border: '1px solid black',
    borderRight: 'none'
  }

  const submitButton = {
    background: '#E5AC43',
    border: '1px solid black',
    fontFamily: 'TwCen',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
  }

  const inputContainer = {
    width: 'fit-content',
    margin: 'auto'
  }

    return (
      <Container>
      <div class="horizontal-mailchimp">
        <Blurb>Subscribe to Newsletter:</Blurb>
        <div>
          <form action="https://werejustbloggers.us12.list-manage.com/subscribe/post?u=b38348e963ae415366792ad09&id=71e8555b1d" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
            <div id="mc_embed_signup_scroll">
              <div style={inputContainer}>
                <input style={noBackground} class="input-class" type="email" value="" name="EMAIL" placeholder="Email address"></input>
                <input style={submitButton} type="submit" value="Subscribe" name="subscribe"></input>
              </div>
              <div style={hidden}>
                <input type="text" name="b_b38348e963ae415366792ad09_71e8555b1d" tabindex="-1" value=""></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      </Container>

    )

}

export { Subscribe }
