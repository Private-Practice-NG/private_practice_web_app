import DashboardContainer from "../../../../components/DashboardContainer";
import Wallet from "../../components/Wallet";

const HospitalWallet = () => {
  return (
    <DashboardContainer isHospital>
      <Wallet />
    </DashboardContainer>
  );
};
export default HospitalWallet;
