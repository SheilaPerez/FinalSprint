import { useContext } from "react";
import GlobalContext from '../Context/GlobalContext';

export const usePremium = () => {
    const { globalContext } = useContext(GlobalContext);

    return {
        isPremium: globalContext === "premium"
    }
}