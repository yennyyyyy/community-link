import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import './Hp.css';
import './All.css';

import Homepage from './components/Homepage';
import About from './components/About';
import Feed from './components/Feed';
import Login from './components/Login';
import Reset from './components/Reset';
import Create from './components/Create';
import Ereport from './components/Ereport';
import Marketplace from './components/Marketplace';
import Forgotpassword from './components/Forgotpassword';
import Ereceive from './components/Ereceive';
import Profile from './components/Profile';
import Update from './components/Update';



function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Homepage" element={<Homepage/>}> </Route>
          <Route path="/About" element={<About/>}> </Route>
          <Route path="/Feed" element={<Feed/>}> </Route>
          <Route path="/comlink/one/:pid" element={<Update/>}> </Route>
          <Route path="/Market" element={<Marketplace/>}> </Route>
          <Route path="/Reset" element={<Reset/>}> </Route>
          <Route path="/comlink/login" element={<Login/>}> </Route>
          <Route path="/comlink/create" element={<Create/>}> </Route>
          <Route path="/Forgot" element={<Forgotpassword/>}> </Route>
          <Route path="/report" element={<Ereport/>}> </Route>
          <Route path="/ereceive" element={<Ereceive/>}> </Route>
          <Route path="/profile" element={<Profile/>}> </Route>
        </Routes>
      </BrowserRouter>
    
    </div>

  );
}

export default App;
