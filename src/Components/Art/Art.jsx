import axios from 'axios';
import { useState, useEffect } from 'react';
import { TarjetArt, Name, FakeInfo, Div, No, Yes } from './Art.styles';

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
        console.log('art', arrayArt);
    })
  }
  return (
    <Div>
      {arts.map((art) => {
        return (
          <TarjetArt>
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
