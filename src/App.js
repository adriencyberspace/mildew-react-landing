import React  from 'react'
import styled from 'styled-components'

import Navigation from './components/Navigation'
import logo from './images/mildew.png'

const Image = styled.img`
  width: 40%;
  margin: 150px 30% 10px;
`;

function Header() {
  return (
    <div>
      <Image src={logo} />
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  )
}

export default App
