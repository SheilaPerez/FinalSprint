import { DivCard, Warning } from './NotPremiumComponent.styles';

const NotPremiumComponent = () => {
  return (
    <DivCard>
      <Warning>warning!!</Warning>
      <p>You need to be Tom Nook Premium.</p>
    </DivCard>
  )
}

export default NotPremiumComponent;
