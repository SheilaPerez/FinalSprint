import axios from 'axios';
import { useState, useEffect } from 'react';
import { TarjetArt, Name, FakeInfo, Div, No, Yes, DivInptQuest, Quest, Input } from './Art.styles';

const Art = () => {
  
  const [arts, setArts] = useState([]);
  const [originalArts, setOriginalArts] = useState([]);
  

  useEffect(() => {
    fetchPageApi("http://acnhapi.com/v1/art/");
  }, []);

  const fetchPageApi = (url) => {
    axios.get(url)
      .then(res => {
        const arrayArt = Object.values(res.data);
        setOriginalArts(arrayArt);
        setArts(arrayArt);
    })
  }

  const handleChangeArt = (e) => {
    const foundArt = arts.filter((art) => {
      return art.name["name-EUen"].toLowerCase() === e.target.value.toLowerCase();
    })

    if (foundArt.length !== 0) {
      setArts(foundArt);
    } else {
      setArts(originalArts);
    }
  }
  return (
    <Div>
      <DivInptQuest>
        <Quest>Which work art wanna found?</Quest>
        <Input type="text" placeholder="Art name" onChange={handleChangeArt}></Input>
      </DivInptQuest>
      {arts.map((art, index) => {
        return (
          <TarjetArt key={index}>
            <Name>{art.name["name-EUen"]}</Name>
            <img src={art.image_uri}></img>
            <FakeInfo>Has Fake?</FakeInfo>
            {art.hasFake ? <Yes>Yes</Yes> : <No>No</No>}
            <FakeInfo>Info:</FakeInfo>
            <p>{art["museum-desc"]}</p>
          </TarjetArt>
        )
      })}
    </Div>
  )
};

export default Art;
