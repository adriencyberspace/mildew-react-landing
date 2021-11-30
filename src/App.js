import React  from 'react'

import Header from './components/Header'
import Navigation from './components/Navigation'
import styled from 'styled-components'

const Body = styled.div`
  height: 100vh;
`

function App() {
  return (
    <Body>
      <Header />
      <Navigation />
    </Body>
  )
}

export default App
