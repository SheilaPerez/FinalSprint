import axios from 'axios';
import { useEffect, useState } from 'react';
import { TarjetSea, PriceInfoSpeed, Name, Div, DivInptQuest, Input, Quest } from './SeaCreatures.styles';

const SeaCreatures = () => {
  const [seaCreatures, setSeaCreatures] = useState([]);
  const [originalSeaCreatures, setOriginalSeaCreatures] = useState([]);

  useEffect(() => {
    fetchApi("http://acnhapi.com/v1/sea/")
  }, []);

  const fetchApi = (url) => {
    axios.get(url)
      .then(res => {
        const arrayCreatures = Object.values(res.data);
        setOriginalSeaCreatures(arrayCreatures);
        setSeaCreatures(arrayCreatures); 
    })
  }   
        
  const handleChangeSea = (e) => {
    const foundSea = seaCreatures.filter((creature) => {
      return creature.name["name-EUen"].toLowerCase() === e.target.value.toLowerCase();
    })

    if (foundSea.length !== 0) {
      setSeaCreatures(foundSea);
    } else {
      setSeaCreatures(originalSeaCreatures);
    }
  }

  return (
    <Div>
      <DivInptQuest>
        <Quest>Which sea creature wanna found?</Quest>
        <Input type="text" placeholder="Sea creature name" onChange={handleChangeSea}></Input>
      </DivInptQuest>
      {seaCreatures.map((creature, index) => {
        return (
          <TarjetSea key={index}>
            <Name>{creature.name["name-EUen"]}</Name>
            <img src={creature.icon_uri}></img>
            <PriceInfoSpeed>Price: </PriceInfoSpeed><p>{creature.price} Bells</p>
            <PriceInfoSpeed>Speed: </PriceInfoSpeed><p>{creature.speed}</p>
            <PriceInfoSpeed>Information:</PriceInfoSpeed>
            <p>{creature["museum-phrase"]}</p>
          </TarjetSea>
        )
      })}
    </Div>
  )
}
export default SeaCreatures;
