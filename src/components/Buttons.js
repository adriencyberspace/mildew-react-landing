import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  color: black;
  margin: 20px;
  padding: 0.25em 1em;
  &:hover {
    color: red; 
  }

  ${props =>
    props.primary &&
    css`
      background: purple;
      color: white;
    `};
`

const TopLeftButton = styled(Button)`
  position: fixed;
  top: 0;
  left: 0;
`

const TopRightButton = styled(Button)`
  position: fixed;
  top: 0;
  right: 0;
`

const BottomLeftButton = styled(Button)`
  position: fixed;
  bottom: 0;
  left: 0;
`

const BottomRightButton = styled(Button)`
  position: fixed;
  bottom: 0;
  right: 0;
`

export {
  Button,
  TopLeftButton,
  TopRightButton,
  BottomLeftButton,
  BottomRightButton
}