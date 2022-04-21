import axios from 'axios';
import { useState, useEffect } from 'react';
import { TarjetFish, Name, PriceInfo, Div } from './Fish.styles';

const Fish = () => {
  const [fishes, setFishes] = useState([]);
  const [originalFishes, setOriginalFishes] = useState([]);

  useEffect(() => {
    fetchPageApi("http://acnhapi.com/v1/fish/");
  }, []);

  const fetchPageApi = (url) => {
    axios.get(url)
    .then(res => {
      const arrayFishes = Object.values(res.data);
      setOriginalFishes(arrayFishes);
      setFishes(arrayFishes);
    })
  }

  return (
    <Div> 
      {fishes.map((fish) => {
        return (
          <TarjetFish>
            <Name>{fish.name["name-EUen"]}</Name>
            <img src={fish.icon_uri}></img>
            <PriceInfo>price </PriceInfo><p>{fish.price}</p>
            <PriceInfo>Information:</PriceInfo>
            <p>{fish["museum-phrase"]}</p>
          </TarjetFish>
        )
        })}
    </Div>
  )
};


export default Fish;
