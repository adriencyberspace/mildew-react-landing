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
    background: 'none',
    border: 'none',
    color: 'black',
    // border: 'none',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  }

  const submitButton = {
    background: 'none',
    border: 'none',
    borderRadius: 0,
    fontFamily: 'TwCen',
    padding: '10px 15px 10px 16px',
    cursor: 'pointer'
  }

  const InputContainer = styled.div`
    margin: auto;
    width: fit-content;
    display: flex;
  
  `

  const SpanInput = styled.div`
    border: none;
    background: #E0ECC6;
    min-height: 40px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `

  const SpanSubmit = styled.div`
    background: #6EB0CC;
    min-height: 40px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `

    return (
      <Container>
      <div class="horizontal-mailchimp">
        <div>
          <form action='https://mildewmag.us20.list-manage.com/subscribe/post?u=037b6a8670c6cce5814bcd8ba&amp;id=8789398a33' method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
            <div>
              <InputContainer>
                <SpanInput>
                  <input style={noBackground} type="email" value="" name="EMAIL" placeholder="Email address"></input>
                </SpanInput>
                <SpanSubmit>
                  <input style={submitButton}type="submit" value="See You Soon" name="subscribe"></input>
                </SpanSubmit>
              </InputContainer>
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
