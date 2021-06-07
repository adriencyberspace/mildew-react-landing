import styled from 'styled-components'
import logo from '../images/mildew.png'

const Logo = styled.img`
  margin: 150px 30% 10px;
  width: 40%;

  @media only screen and (max-width: 900px) {
    margin: 130px 25% 10px;
    width: 50%;
  }

  @media only screen and (max-width: 680px) {
    margin: 120px 15% 0;
    width: 70%;
  }

  @media only screen and (max-width: 420px) {
    margin: 120px 10% 0;
    width: 80%;
  }
`;

function Header() {
  return (
    <div>
      <Logo src={logo} />
    </div>
  )
}

export default Header