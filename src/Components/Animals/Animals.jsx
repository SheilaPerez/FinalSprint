import { Link } from 'react-router-dom';
import { BtnDiv, Div } from './Animals.styles';

const Animals = () => {

  return (
    <Div>
      <Link to="/home/bugs" style={{ textDecoration: 'none', color: 'black' }}>  
        <BtnDiv>
          <p>Bugs</p>
        </BtnDiv>
      </Link>
      <Link to="/home/fish" style={{ textDecoration: 'none', color: 'black' }}>
        <BtnDiv>
          <p>Fish</p>
        </BtnDiv>
      </Link>
      <Link to="/home/seaCreatures" style={{ textDecoration: 'none', color: 'black'}}>
        <BtnDiv>
          <p>Sea Creatures</p>
        </BtnDiv>
      </Link>
    </Div>
  )
}

export default Animals;
