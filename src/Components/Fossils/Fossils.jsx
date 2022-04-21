import axios from 'axios';
import { useState, useEffect } from 'react';
import { TarjetFossil, Name, PriceInfo, Div } from './Fossils.styles'; 

const Fossils = () => {
  const [fossils, setFossils] = useState([]);
  const [originalFossils, setOriginalFossils] = useState([]);

  useEffect(() => {
    fetchApiPage("http://acnhapi.com/v1/fossils/");
  }, []);

  const fetchApiPage = (url) => {
    axios.get(url)
    .then(res => {
      const arrayFossils = Object.values(res.data)
      setOriginalFossils(arrayFossils);
      setFossils(arrayFossils);
      console.log('fossils', arrayFossils)
    })
  }
  
  return (
    <Div>
      {fossils.map((fossil) => {
        return (
          <TarjetFossil>
            <Name>{fossil.name["name-EUen"]}</Name>
            <img src={fossil.image_uri}></img>
            <PriceInfo>Price:</PriceInfo>
            <p>{fossil.price}</p>
            <PriceInfo>Information:</PriceInfo>
            <p>{fossil["museum-phrase"]}</p>
          </TarjetFossil>
        )
      })}
    </Div>
  )
};

export default Fossils;
