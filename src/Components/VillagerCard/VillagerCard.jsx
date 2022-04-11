import SelectedVillagerContext from '../../Context/SelectedVillagerContext';
import { useContext } from 'react';

const VillagerCard = () => {
  const { selectedVillager, setSelectedVillager } = useContext(SelectedVillagerContext);

  return (
    <div>
      {selectedVillager.name["name-EUen"]}
    </div>
  )
};

export default VillagerCard;
