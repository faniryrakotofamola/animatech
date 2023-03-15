import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AvisClient from './components/avisclient/AvisClient';
import DevMobile from './components/devmobile/DevMobile';
import DevWeb from './components/devweb/DevWeb';
import Equipe from './components/equipe/Equipe';
import ErrorPage from './components/error/ErrorPage';
import Navbar from './components/includes/Navbar';
import Realisation from './components/realisation/Realisation';

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/navbar" exact element={<Navbar />} />
        <Route path="/devweb" exact element={<DevWeb />} />
        <Route path="/devmobile" exact element={<DevMobile />} />
        <Route path="/réalisation" exact element={<Realisation />} />
        <Route path="/avisclient" exact element={<AvisClient />} />
        <Route path="/equipe" exact element={<Equipe />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
