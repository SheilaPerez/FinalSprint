import { DivLogin, Input, SignBtn } from './Login.styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const registerUser = JSON.parse(localStorage.getItem('user'));
    if (registerUser && (registerUser.email === email && registerUser.password === password)) {
      navigate("/home");
    }
  }, [isLogged]);
  

  return (
    <DivLogin>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></Input>
      <Input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></Input>
      <SignBtn type="button" onClick={() => {setIsLogged(true)}}>sign in</SignBtn>
    </DivLogin>
  )
};


export default Login;
