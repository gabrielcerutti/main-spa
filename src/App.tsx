import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MicroFrontend from './components/MicroFrontend';

const microaHost = process.env.REACT_APP_MICROA_HOST ?? '';
const microbHost = process.env.REACT_APP_MICROB_HOST ?? '';

const MicroA = () => {
  return (
    <MicroFrontend
      id={1}
      name="Micro-frontend A"
      microId="YourBrandNewMicrofrontend"
      host={microaHost}
      basePath="microa"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};

const MicroB = () => {
  return (
    <MicroFrontend
      id={1}
      name="Micro-frontend A"
      microId="YourBrandNewMicrofrontendB"
      host={microbHost}
      basePath="microa"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/about" element={<About />} />
          <Route path="/microa" element={<MicroA />} />
          <Route path="/microb" element={<MicroB />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
