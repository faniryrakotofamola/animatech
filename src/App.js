import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ErrorPage from './components/error/ErrorPage';
import Navbar from './components/includes/Navbar';

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/navbar" exact element={<Navbar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
