import SelectedVillagerContext from '../../Context/SelectedVillagerContext';
import GlobalContext from '../../Context/GlobalContext';
import { useContext } from 'react';
import { P, Warning } from './GoldCardVillager.styles';

const GoldCardVillager = ({clickCard}) => {
  const { selectedVillager, setSelectedVillager } = useContext(SelectedVillagerContext);
  const { globalContext, setGlobalContext } = useContext(GlobalContext);

  return (
    <div>
      {globalContext == "premium" && clickCard ? 
        <select>
          <option>Name in all languages</option>
          <option value="">German: {selectedVillager.name["name-EUde"]}</option>
          <option value="">Spanish: {selectedVillager.name["name-EUes"]}</option>
          <option value="">Japan: {selectedVillager.name["name-JPja"]}</option>
          <option value="">Unites States: {selectedVillager.name["name-USen"]}</option>
          <option value="">French: {selectedVillager.name["name-USfr"]}</option>
        </select>
        :
        <div>
          <Warning>warning!!</Warning>
          <P>Name in all languages only in premium version</P>
        </div>
      }
    </div>
)
};

export default GoldCardVillager;
