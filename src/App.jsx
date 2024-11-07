import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '../page/Autentikasi';
import './App.css';
import { DarkModeProvider } from '../page/DarkModeContext';
import Tampilan from '../page/PageTampilan';
import PageDetail from '../page/pageDetail';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Tampilan />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/detail" element={<PageDetail />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
