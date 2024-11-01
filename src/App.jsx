import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BerandaUtama from '../page/BerandaUtama';
import Cards from '../page/PageCards';
import CardsA from '../page/CardsA';
import CardsB from '../page/CardB';
import Auth from '../page/Autentikasi';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/carda" element={<CardsA />} />
        <Route path="/cardb" element={<CardsB />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
