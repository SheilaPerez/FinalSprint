import Header from '../Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Villagers from '../Villagers';
import Animals from '../Animals';
import Art from '../Art';
import Fossils from '../Fossils';
import { SelectedVillagerProvider } from '../../Context/SelectedVillagerContext'
import { useState } from 'react';
import VillagerCard from '../VillagerCard';

const LoggedLayout = () => {
  const [selectedVillager, setSelectedVillager] = useState({});
  const value = { selectedVillager, setSelectedVillager };

  return (
    <div>
      <SelectedVillagerProvider value={value}>
        <Header></Header> 
        <Routes>
          <Route index path="home" element={<Home></Home>}></Route> 
          <Route path="villagers" element={<Villagers></Villagers>}></Route> 
          <Route path="animals" element={<Animals></Animals>}></Route> 
          <Route path="art" element={<Art></Art>}></Route> 
          <Route path="fossils" element={<Fossils></Fossils>}></Route>
          <Route path="villagerCard" element={<VillagerCard></VillagerCard>}></Route>
        </Routes>
        <section>
          <Outlet/>
        </section>
      </SelectedVillagerProvider>
    </div>
  )
};

export default LoggedLayout;
