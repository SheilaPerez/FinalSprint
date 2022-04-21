import axios from 'axios';
import { useState, useEffect } from 'react';
import { TarjetFossil, Name, PriceInfo, Div, Quest, Input, DivInptQuest } from './Fossils.styles'; 

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
    })
  }

  const handleChangeFossil = (e) => {
    const foundFossil = fossils.filter((fossil) => {
      return fossil.name["name-EUen"].toLowerCase() === e.target.value.toLowerCase();
    })

    if (foundFossil.length !== 0) {
      setFossils(foundFossil);
    } else {
      setFossils(originalFossils);
    }
  }
  
  return (
    <Div>
      <DivInptQuest>
        <Quest>Which fossil wanna found?</Quest>
        <Input type="text" placeholder="Fossil name" onChange={handleChangeFossil}></Input>
      </DivInptQuest>
      {fossils.map((fossil, index) => {
        return (
          <TarjetFossil key={index}>
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
