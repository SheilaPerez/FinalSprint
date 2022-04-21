import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { VillagerImg, VillagersList, Tarjet, Name, Page, Input } from './Villagers.styles';
import { useNavigate } from 'react-router-dom';
import SelectedVillagerContext from '../../Context/SelectedVillagerContext';

const Villagers = () => {
  const [villagers, setVillagers] = useState([]);
  const [originalVillagers, setOriginalVillagers] = useState([]);
  const navigate = useNavigate();
  const { selectedVillager, setSelectedVillager } = useContext(SelectedVillagerContext);

  useEffect(() => {
    fetchPageApi("http://acnhapi.com/v1/villagers/")
  }, []);
  
  const fetchPageApi = (url) => {
    axios.get(url)
      .then(res => {
        const arrayVillagers = Object.values(res.data); //Transformar objeto a array 
        setOriginalVillagers(arrayVillagers)
        setVillagers(arrayVillagers); 
    })
  };

  const handleChangeSearchName = (e) => {
    const foundVillager = villagers.filter((villager) => {
      return villager.name["name-EUen"].toLowerCase()  === e.target.value.toLowerCase();
    });
    
    if (foundVillager.length !== 0) {
      setVillagers(foundVillager);
    } else {
      setVillagers(originalVillagers);
    }
  }

  const handleClickVillager = (villager) => {
    setSelectedVillager(villager);
    navigate('/home/villagerCard')
  }

  return (
    <Page>
      <p>Do you know de villager name? Search here! </p>
      <Input type="text" placeholder="Villager name" onChange={handleChangeSearchName}></Input>
      <VillagersList>
        {villagers.map((villager, index) => {
          return (
            <Tarjet key={index} onClick={() => {handleClickVillager(villager)}}>
              <Name>{villager.name["name-EUen"]}</Name>
              <VillagerImg src={villager.image_uri}></VillagerImg>
            </Tarjet>
          )
        })}
      </VillagersList>
    </Page>
    
    
  )
};

export default Villagers;
