import {
  TopLeftButton,
  TopRightButton,
  BottomLeftButton,
  BottomRightButton
} from './Buttons'
import Container from './Container'

const Navigation = () => {

  return (
    <Container>
      <TopLeftButton as="a" href="#">ABOUT</TopLeftButton>
      <TopRightButton primary as="a" href="#">INSTAGRAM</TopRightButton>
      <BottomLeftButton as="a" href="#">SUBSCRIBE</BottomLeftButton>
      <BottomRightButton as="a" href="#">SHOP</BottomRightButton>
    </Container>
  )
}

export default Navigation