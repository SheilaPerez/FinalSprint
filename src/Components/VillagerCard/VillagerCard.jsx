import SelectedVillagerContext from '../../Context/SelectedVillagerContext';
import { useContext, useState } from 'react';
import { Card, Title, DescriptinDiv, Div, Name, PremiumCard, GoldCard } from './VillagerCard.styles';
import GoldCardVillager from '../GoldCardVillager/GoldCardVillager';

const VillagerCard = () => {
  const { selectedVillager, setSelectedVillager } = useContext(SelectedVillagerContext);
  const [ clickGoldCard, setClickGoldCard ] = useState(false);
  
  const handleClickGoldCard = () => {
    setClickGoldCard(true);
  }
  return (
    <Div>
      <Card>
        <Name>{selectedVillager.name["name-EUen"]}</Name>
        <img src={selectedVillager.icon_uri}></img>
        <DescriptinDiv><Title>Specie: </Title> <p> {selectedVillager.species}</p></DescriptinDiv>
        <DescriptinDiv><Title>Personality:</Title> <p>{selectedVillager.personality}</p></DescriptinDiv>
        <DescriptinDiv><Title>Birthday:</Title> <p>{selectedVillager["birthday-string"]}</p></DescriptinDiv>
        <DescriptinDiv><Title>Hobby:</Title> <p>{selectedVillager.hobby}</p></DescriptinDiv>
      </Card>
      <PremiumCard onClick={handleClickGoldCard}>
      <GoldCard>Click Gold Card</GoldCard>
        {clickGoldCard ? <GoldCardVillager clickCard={clickGoldCard}></GoldCardVillager> : null}
      </PremiumCard>
    </Div>
  )
};

export default VillagerCard;
