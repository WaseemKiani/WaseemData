import './App.css';
import Footer from './Components/HomeData/Footer';
import Header from './Components/HomeData/Header';
import Home from "./Components/HomeData/Home"
import {Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignUp from './Components/Pages/loginSignup';
import Myprofile from './Components/Pages/MyProfile/Myprofile';
import UserOptions from "./Components/Pages/SpeedDial/UserOptions.js"
import { useSelector } from 'react-redux';
import RequestPage from "./Components/Pages/RequestPage/RequestPage.js";
import MyOrders from "./Components/Pages/userOrderPage/MyOrders.js";


function App() {

  
  

  return (
    <>
          
      <Header/>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<LoginSignUp/>} />
          <Route exact path='/Myprofile' element={<Myprofile/>} />
          <Route exact path='/myOrders/:id' element={<MyOrders/>} />
          <Route exact path='/:id' element={<RequestPage/>} />
      </Routes> 
      <Footer/>

    </>
  );
}

export default App;
