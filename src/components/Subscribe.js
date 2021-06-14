import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: fit-content;
  margin: auto;
`

const Subscribe = () => {
  const hidden = {
    display: 'none',
  }

  const noBackground = {
    background: '#E0ECC6',
    border: 'none',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  }

  const submitButton = {
    background: '#6EB0CC',
    border: 'none',
    borderRadius: 0,
    fontFamily: 'TwCen',
    padding: '10px 15px',
  }

  const inputContainer = {
    border: '1px solid black',
    margin: 'auto',
    width: 'fit-content',
  }

    return (
      <Container>
      <div class="horizontal-mailchimp">
        <div>
          <form action="https://werejustbloggers.us12.list-manage.com/subscribe/post?u=b38348e963ae415366792ad09&id=71e8555b1d" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
            <div id="mc_embed_signup_scroll">
              <div style={inputContainer}>
                <input style={noBackground} class="input-class" type="email" value="" name="EMAIL" placeholder="Email address"></input>
                <input style={submitButton} id="subscribe-button" type="submit" value="See You Soon" name="subscribe"></input>
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
