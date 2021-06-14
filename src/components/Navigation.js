import styled, { css } from 'styled-components'
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'

import { About } from './About'
import { Contact } from './Contact'
import { Home } from './Home'

import nav1white from '../images/nav1white.png'
import nav1color from '../images/nav1color.png'
import nav2white from '../images/nav2white.png'
import nav2color from '../images/nav2color.png'
import nav3white from '../images/nav3white.png'
import nav3color from '../images/nav3color.png'
import nav4white from '../images/nav4white.png'
import nav4color from '../images/nav4color.png'


const NavBlob = styled.div`
  background: transparent;
  background-size: cover;
  color: black;
  font-family: "TwCen";
  font-size: 22px;
  margin: 30px 40px;
  position: fixed;
  text-decoration: none;
  width: 180px;
  height: 120px;
  &:hover {
    color: white;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }


  ${props =>
    props.topLeft &&
    css`
    background-image: url(${nav1white});
      top: 0;
      left: 0;
      &:hover {
        background-image: url(${nav1color});
        transform: rotate(-15deg);
      }
    `};

  ${props =>
    props.topRight &&
    css`
      background-image: url(${nav2white});
      top: 0;
      right: 0;
      &:hover {
        background-image: url(${nav2color});
        transform: rotate(15deg);
      }
    `};

  ${props =>
    props.bottomLeft &&
    css`
      background-image: url(${nav3white});
      bottom: 0;
      left: 0;
      &:hover {
        background-image: url(${nav3color});
        transform: rotate(15deg);
      }
    `};

  ${props =>
    props.bottomRight &&
    css`
      background-image: url(${nav4white});
      bottom: 0;
      right: 0;
      width: 210px;
      padding-bottom: 20px;
      &:hover {
        background-image: url(${nav4color});
        transform: rotate(-15deg);
      }
    `};
`

const NavLink = styled(Link)`
  top: 50%;
  left: 50%;
  padding: 50px 50px;
  position: absolute;
  text-decoration: none;
  transform: translate(-50%, -50%);
  &:hover {
    color: white;
  }

  ${props =>
    props.bR &&
    css`
    top: 57%;
    `
  }
`

const Container = styled.div`
`

const Navigation = () => {

  return (
    <Container>
      <BrowserRouter>
      <NavBlob topLeft>
        <NavLink id="green" to="/">Home</NavLink>
      </NavBlob>

      <NavBlob topRight><NavLink id="pink" to="/about">About</NavLink></NavBlob>
      <NavBlob bottomLeft><NavLink bR id="teal" to="/contact">Contact</NavLink></NavBlob>
      <NavBlob bottomRight><NavLink bR id="blue" target="_blank" to={{ pathname: "https://www.instagram.com/mildewmag/"}}>Instagram</NavLink></NavBlob>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default Navigation