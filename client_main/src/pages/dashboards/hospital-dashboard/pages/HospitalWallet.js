import DashboardContainer from "../../../../components/DashboardContainer";
import Wallet from "../../components/Wallet";

const HospitalWallet = () => {
  return (
    <DashboardContainer navType="hospital">
      <Wallet />
    </DashboardContainer>
  );
};
export default HospitalWallet;
