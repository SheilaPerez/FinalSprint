import Header from '../Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Villagers from '../Villagers';
import Animals from '../Animals';
import Art from '../Art';
import Fossils from '../Fossils';
import { SelectedVillagerProvider } from '../../Context/SelectedVillagerContext'
import { useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import VillagerCard from '../VillagerCard';
import Bugs from '../Bugs';
import Fish from '../Fish';
import SeaCreatures from '../SeaCreatures';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const LoggedLayout = () => {
  const [selectedVillager, setSelectedVillager] = useState({});
  const valueVillager = { selectedVillager, setSelectedVillager };
  const { globalContext, setGlobalContext } = useContext(GlobalContext);

  return (
    <div>
        <SelectedVillagerProvider value={valueVillager}>
          <Header></Header> 
          <Routes>
            <Route index path="" element={<Home></Home>}></Route> 
            <Route path="villagers" element={<Villagers></Villagers>}></Route> 
            <Route path="animals" element={<Animals></Animals>}></Route> 
            <Route path="art" element={<PrivateRoute component={Art}></PrivateRoute>}/>
            <Route path="fossils" element={<Fossils></Fossils>}></Route>
            <Route path="villagerCard" element={<VillagerCard></VillagerCard>}></Route>
            <Route path="bugs" element={<Bugs></Bugs>}></Route>
            <Route path="fish" element={<Fish></Fish>}></Route>
            <Route path="seaCreatures" element={<SeaCreatures></SeaCreatures>}></Route>
          </Routes>
          <section>
            <Outlet/>
          </section>
        </SelectedVillagerProvider>
    </div>
  )
};

export default LoggedLayout;
