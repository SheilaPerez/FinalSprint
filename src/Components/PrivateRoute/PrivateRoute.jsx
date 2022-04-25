import { usePremium } from '../../Hooks/use-premium';
import NotPremiumComponent from '../NotPremiumComponent';

const PrivateRoute = ({ component: Component }) => {
  const { isPremium } = usePremium();

  return isPremium ? <Component /> : <NotPremiumComponent />;
};

export default PrivateRoute;
