import logo from './logo.svg';
import { HashRouter, Routes, Route } from 'react-router-dom';

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
      <HashRouter basename="/community-link">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/comlink/one/:pid" element={<Update />} />
          <Route path="/Market" element={<Marketplace />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/comlink/login" element={<Login />} />
          <Route path="/comlink/create" element={<Create />} />
          <Route path="/Forgot" element={<Forgotpassword />} />
          <Route path="/report" element={<Ereport />} />
          <Route path="/ereceive" element={<Ereceive />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
