import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Adventure from './Pages/Adventure/Adventure/Adventure';
import Tours from './Pages/Tours/Tours/Tours';
import ToursDetails from './Pages/Tours/ToursDetails/ToursDetails';
import HotelDetails from './Pages/Hotels/HotelDetails/HotelDetails';
import Hotels from './Pages/Hotels/Hotels/Hotels';
import Restaurants from './Pages/Restaurants/Restaurants/Restaurants';
import RestaurantDetails from './Pages/Restaurants/RestaurantDetails/RestaurantDetails';
import About from './Pages/About/About';
import MediaGallery from './Pages/MediaGallery/MediaGallery';
import Help from './Pages/Help/Help';
import Faq from './Pages/Faq/Faq';
import WishList from './Pages/WishList/WishList';
import Contacts from './Pages/Contacts/Contacts';
import Blogs from './Pages/Blogs/Blogs';
import Payments from './Pages/Payments/Payments';
import Invoice from './Pages/Invoice/Invoice';
import SignIn from './Pages/Login/SignIn/SignIn';

function App() {
  return (
    <div className="" id="">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/toursDetails" element={<ToursDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotelDetails" element={<HotelDetails />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurantDetail" element={<RestaurantDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/mediaGallery" element={<MediaGallery />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/singIn" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
