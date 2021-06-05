import Container from './Container'

import styled, { css } from 'styled-components'

const NavLink = styled.a`
  background: transparent;
  border: 1px solid black;
  color: black;
  margin: 20px;
  padding: 0.25em 2em;
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

const Navigation = () => {

  return (
    <Container>
      <NavLink topLeft as="a" href="/">HOME</NavLink>
      <NavLink topRight as="a" target="_blank" href="https://www.instagram.com/mildewmag/">INSTAGRAM</NavLink>
      <NavLink bottomLeft as="a" href="/subscribe">SUBSCRIBE</NavLink>
      <NavLink bottomRight as="a" href="/about">ABOUT</NavLink>
    </Container>
  )
}

export default Navigation