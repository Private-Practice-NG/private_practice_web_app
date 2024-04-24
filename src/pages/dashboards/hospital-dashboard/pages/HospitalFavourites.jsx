import DashboardContainer from "../../../../components/DashboardContainer";
import Favourites from "../../components/Favourites";
// import ProfileListing from "../components/ProfileListing";

const HospitalFavourites = () => {
  return (
    <DashboardContainer isHospital>
      <Favourites />
    </DashboardContainer>
  );
};
export default HospitalFavourites;
