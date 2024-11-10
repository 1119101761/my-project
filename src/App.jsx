import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '../page/Autentikasi';
import './App.css';
import { DarkModeProvider } from '../page/DarkModeContext';
import Tampilan from '../page/PageTampilan';
import Biodata from '../page/PageBiodata';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Tampilan />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/biodata" element={<Biodata />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
