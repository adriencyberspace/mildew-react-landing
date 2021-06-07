import styled from 'styled-components'

const BlurbDiv = styled.div`
  margin: 0 auto;
  width: fit-content;
`

const Blurb = styled.h4`
  margin: 20px;
  font-size: 38px;

  @media only screen and (max-width: 1100px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`

const P = styled.p`
  margin: 0px auto;
  width: fit-content;
  max-width: 60%;
  font-size: 18px;

  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`

const A = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export {A, Blurb, BlurbDiv, P}