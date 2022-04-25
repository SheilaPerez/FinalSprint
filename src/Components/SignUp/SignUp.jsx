import { Page, Input, Div, SignBtn, InputDiv, ChooseText, ChooseDiv, Select } from './SignUp.styles';
import { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';

const SignUp = () => {
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerClicked, setRegisterClicked] = useState(false);
  const [registerChoose, setRegisterChoose] = useState();
  const navigate = useNavigate();
  const { globalContext, setGlobalContext } = useContext(GlobalContext);

  useEffect(() => {
    if (registerClicked) {
      const userRegister = { nick, email, password, registerChoose };
      localStorage.setItem('user', JSON.stringify(userRegister));
      setGlobalContext(registerChoose);
      navigate('/');
    }
  }, [registerClicked]);

  const handleClickRegister = () => {
    setRegisterClicked(true);
  }
 
  return (
    <Div>
      <Page>
        <InputDiv>
          <ChooseDiv>
            <ChooseText>Choose villager or enjoy the advantages being Toom Nook Premium</ChooseText>
            <Select onChange={(e) => { setRegisterChoose(e.target.value) }} value={registerChoose}>
              <option>Select your choise:</option>
              <option value="villager">Villager</option>
              <option value="premium">Toom Nook Premium</option>
            </Select>
          </ChooseDiv>
          <Input type="text" placeholder="Nickname" value={nick} onChange={(e) => {setNick(e.target.value)}}></Input>
          <Input type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}></Input>
          <Input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></Input>
          <SignBtn type="button" onClick={handleClickRegister}>Register</SignBtn>
        </InputDiv>
      </Page>
    </Div>
  )
};


export default SignUp;
