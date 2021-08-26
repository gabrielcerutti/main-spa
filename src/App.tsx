import './App.css';
import AppHeader from './components/AppHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { MicroX, MicroY } from './Microfrontends';

function App() {
  console.log(`Environment is ${process.env.NODE_ENV}`);
  console.log(`Public URL is ${process.env.PUBLIC_URL}`);
  const basename = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes basename={basename}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/microx" element={<MicroX />} />
          <Route path="/microy" element={<MicroY />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
