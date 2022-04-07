import Header from '../Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Villagers from '../Villagers';
import Animals from '../Animals';
import Art from '../Art';
import Fossils from '../Fossils';

const LoggedLayout = () => {

  return (
    <div>
      <Header></Header> 
      <Routes>
        <Route index path="home" element={<Home></Home>}></Route> 
        <Route path="villagers" element={<Villagers></Villagers>}></Route> 
        <Route path="animals" element={<Animals></Animals>}></Route> 
        <Route path="art" element={<Art></Art>}></Route> 
        <Route path="fossils" element={<Fossils></Fossils>}></Route> 
      </Routes>
      <section>
        <Outlet/>
      </section>
    </div>
  )
};

export default LoggedLayout;
