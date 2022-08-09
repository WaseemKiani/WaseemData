import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from "./Components/Home"
import {Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignUp from './Components/Pages/loginSignup';
import Myprofile from './Components/Pages/MyProfile/Myprofile';

function App() {
  return (
    <>
      <Header/>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<LoginSignUp/>} />
          <Route exact path='/Myprofile' element={<Myprofile/>} />
      </Routes> 
      <Footer/>

    </>
  );
}

export default App;
