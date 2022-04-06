import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Welcome></Welcome>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
