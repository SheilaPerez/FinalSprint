import axios from 'axios';
import { useEffect, useState } from 'react';
import { TarjetBug, Name, PriceInfo, Div } from './Bugs.styles';

const Bugs = () => {
  const [bugs, setBugs] = useState([]);
  const [originalBugs, setOriginalBugs] = useState([])
  useEffect(() => {
    fetchPageApi("http://acnhapi.com/v1/bugs/")
  }, []);

  const fetchPageApi = (url) => {
    axios.get(url)
      .then(res => {
        const arrayBugs = Object.values(res.data);
        setOriginalBugs(arrayBugs);
        setBugs(arrayBugs);
        console.log('bugs', arrayBugs)
      })
  }

  return (
    <Div>
      {bugs.map((bug) => {
        return (
          <TarjetBug>
            <Name>{bug.name["name-EUen"]}</Name>
            <img src={bug.icon_uri}></img>
            <PriceInfo>Price: </PriceInfo><p>{bug.price}</p>
            <PriceInfo>Information:</PriceInfo>
            <p>{bug["museum-phrase"]}</p>
          </TarjetBug>
        )
      })}
    </Div>
  )
}
export default Bugs;
