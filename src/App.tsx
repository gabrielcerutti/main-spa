import './App.scss';
import AppHeader from './components/Header/AppHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { MicroX, MicroY } from './Microfrontends';

function App() {
  console.log(`Environment is ${process.env.NODE_ENV}`);
  console.log(`Public URL is ${process.env.PUBLIC_URL}`);
  const basename = process.env.PUBLIC_URL;
  return (
    <div className="Main-Spa">
      <BrowserRouter>
        <AppHeader />
        <Routes basename={basename}>
          <Route path="/about" element={<About />} />
          <Route path="/micro-x" element={<MicroX />} />
          <Route path="/micro-y" element={<MicroY />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
