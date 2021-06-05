import styled, { css } from 'styled-components'

const NavButton = styled.button`
  background: transparent;
  border: 1px solid black;
  color: black;
  margin: 20px;
  padding: 0.25em 1em;
  position: fixed;
  &:hover {
    color: red; 
  }

  ${props =>
    props.topLeft &&
    css`
      top: 0;
      left: 0;
    `};

  ${props =>
    props.topRight &&
    css`
      top: 0;
      right: 0;
    `};

  ${props =>
    props.bottomLeft &&
    css`
      bottom: 0;
      left: 0;
    `};

  ${props =>
    props.bottomRight &&
    css`
      bottom: 0;
      right: 0;
    `};

`

export {
  NavButton
}