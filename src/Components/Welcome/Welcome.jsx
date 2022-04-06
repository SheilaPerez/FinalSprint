import {Page, Banner, RegisterBtn, RegisterDiv, AccountText} from './Welcome.styles';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
      navigate('/register')
  }

  return (
    <Page>
      <Banner></Banner>
      <Login></Login>
      <RegisterDiv>
        <AccountText>D'ont have an account yet?</AccountText>
        <RegisterBtn type="button" onClick={handleClickRegister}>Register now</RegisterBtn>
      </RegisterDiv>
    </Page>
  )
};


export default Welcome;
