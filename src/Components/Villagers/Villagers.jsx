import { useState, useEffect } from 'react';
import axios from 'axios';
import { VillagerImg, VillagersList, Tarjet, Name } from './Villagers.styles';

const Villagers = () => {
  const [villagers, setvillagers] = useState({});
  
  useEffect(() => {
    fetchPageApi("http://acnhapi.com/v1/villagers/")
  }, []);
  
  const fetchPageApi = (url) => {
    axios.get(url)
      .then(res => {
        setvillagers(res.data)
        console.log('vilag', res)
    })
  };

  return (
    <VillagersList>
      {villagers && Object.keys(villagers).map((villager) => {
        return (
          <Tarjet>
            <Name>{villagers[villager].name["name-EUen"]}</Name>
            <VillagerImg src={villagers[villager].image_uri}></VillagerImg>
          </Tarjet>
        )
      })}
    </VillagersList>
  )
};

export default Villagers;
