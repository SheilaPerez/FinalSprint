import axios from 'axios';
import { useEffect, useState } from 'react';
import { TarjetSea, PriceInfoSpeed, Name, Div } from './SeaCreatures.styles';

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
        console.log('sea', arrayCreatures);    
    })
  }   
        
  return (
    <Div>
      {seaCreatures.map((creature) => {
        return (
          <TarjetSea>
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
