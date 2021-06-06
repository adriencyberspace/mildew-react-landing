import styled, { css } from 'styled-components'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import { About } from './About'
import { Contact } from './Contact'
import { Home } from './Home'

const NavLink = styled(Link)`
  background: transparent;
  color: black;
  font-family: "TwCen";
  font-size: 18px;
  margin: 30px 40px;
  padding: 20px;
  position: fixed;
  text-decoration: none;
  &:hover {

  }

  ${props =>
    props.topLeft &&
    css`
      border: 1px solid #B0B04C;
      top: 0;
      left: 0;
      &:hover {
        transform: rotate(-15deg);
        background: #B0B04C;
      }
    `};

  ${props =>
    props.topRight &&
    css`
      border: 1px solid #E89B9A;
      top: 0;
      right: 0;
      &:hover {
        transform: rotate(15deg);
        background: #E89B9A;
      }
    `};

  ${props =>
    props.bottomLeft &&
    css`
      border: 1px solid #C85D4A;
      bottom: 0;
      left: 0;
      &:hover {
        transform: rotate(15deg);
        background: #C85D4A;
      }
    `};

  ${props =>
    props.bottomRight &&
    css`
      border: 1px solid #319686;
      bottom: 0;
      right: 0;
      &:hover {
        transform: rotate(-15deg);
        background: #319686;
      }
    `};
`
const Container = styled.div`
`

const Navigation = () => {

  return (
    <Container>
      <BrowserRouter>
        <NavLink topLeft to="/">Home</NavLink>
        <NavLink topRight target="_blank" href="https://www.instagram.com/mildewmag/">Instagram</NavLink>
        <NavLink bottomLeft to="/contact">Contact</NavLink>
        <NavLink bottomRight to="/about">About</NavLink>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default Navigation