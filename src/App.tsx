import './App.scss';
import AppHeader from './components/Header/AppHeader';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { MicroX, MicroY } from './Microfrontends';
import Workspace from './components/MicroFrontend/Workspace';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// CSS class name generation, we are using this in order to not collision names with the micro-frontends
const generateClassName = createGenerateClassName({
  disableGlobal: false,
  productionPrefix: 'mainspa',
  seed: 'mainspa',
});

function App() {
  console.log(`Environment is ${process.env.NODE_ENV}`);
  console.log(`Public URL is ${process.env.PUBLIC_URL}`);
  // const basename = process.env.PUBLIC_URL;
  return (
    <div className="Main-Spa">
      {/* HashRouter is used here in replacement of BrowserRouter because GitHub doesn't support browser history */}
      <HashRouter>
        <StylesProvider generateClassName={generateClassName}>
          <AppHeader />
          <Workspace>
            <Routes basename={'/'}>
              <Route path="/about" element={<About />} />
              <Route path="/micro-x" element={<MicroX />} />
              <Route path="/micro-y" element={<MicroY />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Workspace>
        </StylesProvider>
      </HashRouter>
    </div>
  );
}

export default App;
