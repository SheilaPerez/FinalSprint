import axios from 'axios';
import { useState, useEffect } from 'react';
import { TarjetFish, Name, PriceInfo, Div, DivInptQuest, Input, Quest } from './Fish.styles';

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

  const handleChangeFish = (e) => {
    const foundFish = fishes.filter((fish) => {
      return (fish.name["name-EUen"].toLowerCase() === e.target.value.toLowerCase());
    })

    if (foundFish.length !== 0) {
      setFishes(foundFish);
    } else {
      setFishes(originalFishes);
    }
  }

  return (
    <Div> 
      <DivInptQuest>
        <Quest>Which fish you wanna found?</Quest>
        <Input type="text" placeholder="Fish name" onChange={handleChangeFish}></Input>
      </DivInptQuest>
      {fishes.map((fish, index) => {
        return (
          <TarjetFish key={index}>
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
