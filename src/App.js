import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";
import "./App.css";
import About from './Components/About';
import Weather from './pages/Weather';
import Login from './pages/Login';
import Footer from './Components/Footer';
import Posts from './pages/Posts';
import PostsIdPage from './pages/PostIdPage';
import Navi from './Components/Navbar'

function App() {

 

  return (
  
     <Router>
       <Fragment>
       <Navi/>
      <Routes>
      <Route path='/posts/:id' element={<PostsIdPage/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/weather' element={<Weather/>}/>
     <Route path='/about' element={<About/>}/></Routes>
 </Fragment>
    <Footer/>
     </Router>
  

  );
}

export default App;
