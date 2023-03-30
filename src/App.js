import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import Design from './components/designdemarque/Design';
import DevLogiciels from './components/devlogiciels/DevLogiciels';
import DevMobile from './components/devmobile/DevMobile';
import DevWeb from './components/devweb/DevWeb';
import ErrorPage from './components/error/ErrorPage';
// import Footer from './components/includes/Footer';
// import Navbar from './components/includes/Navbar';
// import OutilsEtTechnologies from './components/includes/OutilsEtTechnologies';
import Aos from 'aos';
import { useEffect } from 'react';
import Loader from './components/Loader/Loader';
import AvisClient from './components/avisclient/AvisClient';
import Exemple from './components/exemple/Exemple';
import Realisation from './components/realisation/Realisation';
import Recrutement from './components/recrutement/Recrutement';

function App() {
  useEffect(() => {
    Aos.init()
  })
  return (
    <Router >
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/loader" exact element={<Loader />} />
        <Route path="/exemple" exact element={<Exemple />} />
        <Route path="/devweb" exact element={<DevWeb />} />
        <Route path="/devmobile" exact element={<DevMobile />} />
        <Route path="/devlogiciels" exact element={<DevLogiciels />} />
        <Route path="/réalisation" exact element={<Realisation />} />
        <Route path="/avisclient" exact element={<AvisClient />} />
        <Route path="/design" exact element={<Design />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/recrutement" exact element={<Recrutement />} />
        {/* <Route path="/outils" exact element={<OutilsEtTechnologies />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
