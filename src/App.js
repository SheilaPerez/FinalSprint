import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import LoggedLayout from './Components/LoggedLayout';


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" exact element={<Welcome></Welcome>}></Route>
            <Route path="/register" element={<SignUp></SignUp>}></Route>
            <Route index path="/home/*" element={<LoggedLayout></LoggedLayout>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
