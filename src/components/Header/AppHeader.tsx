import { NavLink } from 'react-router-dom';
import logo from './logo_triunfador.jpg';
import './AppHeader.scss';

const AppHeader = () => (
  <header className="MainSpa-header">
    <div>
      <img src={logo} className="logo" alt="logo" />
      <h1>
        <NavLink to="/">Main SPA</NavLink>
      </h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/micro-x">Micro App X</NavLink>
        </li>
        <li>
          <NavLink to="/micro-y">Micro App Y</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
