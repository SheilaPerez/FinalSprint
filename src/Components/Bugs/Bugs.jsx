import axios from 'axios';
import { useEffect, useState } from 'react';
import { TarjetBug, Name, PriceInfo, Div, Input, Quest, DivInptQuest } from './Bugs.styles';

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
      })
  }

  const handleChangeBug = (e) => {
    const foundBug = bugs.filter((bug) => {
      return bug.name["name-EUen"].toLowerCase() === e.target.value.toLowerCase();
    })

    if (foundBug.length !== 0) {
      setBugs(foundBug);
    } else {
      setBugs(originalBugs);
    }
  }

  return (
    <Div>
      <DivInptQuest>
        <Quest>Which bug you wanna found?</Quest>
        <Input type="text" placeholder="Bug name" onChange={handleChangeBug}></Input>
      </DivInptQuest>
      {bugs.map((bug, index) => {
        return (
          <TarjetBug key={index}>
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
