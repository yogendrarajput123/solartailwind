import { Route, Routes } from "react-router-dom";
import ReviewAndRating from "./Components/ReviewAndRating/ReviewAndRating";
import ReviewRating from "./Components/ReviewRating/ReviewRating";
import Rating from "./Components/ReviewAndRating/Rating";
import Likes from "./Components/ReviewAndRating/Likes";
import Notification from "./Components/Notification/Notification";
import VendorCards from "./Components/VendorCards/VendorCards";
import Calculator from "./Components/Calculator/Calculator";
import ResolutionForm from "./Components/ResolutionForm/ResolutionForm";
import OptionCitizen from "./Components/OptionCitizen/OptionCitizen";
import GreenCertiRequest from "./Components/GreenCertificateRequest/GreenCertiRequest";
import VendorLikes from "./Components/VendorLikesPage.js/VendorLikes";

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      {/* <ContentRouter /> */}
      {/* <ProductDetails /> */}
      {/* <OptionCitizen /> */}
      {/* <ReviewRating /> */}
      {/* <Dashboard /> */}
      {/* <VendorProfile />      */}
      {/* <VendorInput /> */}
      {/* <Contact /> */}
      {/* <ReviewAndRating /> */}
      {/* <Notification /> */}
      {/* <Rating /> */}
      {/* <Likes /> */}
      {/* <Notification /> */}
      {/* <NotificationOnProduct /> */}
      {/* <Home /> */}
      <VendorLikes />
      {/* <VendorCards/> */}
      {/* <Calculator /> */}
      {/* <ResolutionForm /> */}
      {/* <GreenCertiRequest /> */}
    </div>
  );
}

export default App;
