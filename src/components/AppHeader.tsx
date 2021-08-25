import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './AppHeader.css';

const AppHeader = () => (
  <header className="MainSpa-header">
    <div>
      <img src={logo} className="logo" alt="logo" />
      <h1>Main SPA</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/microa">Micro App A</NavLink>
        </li>
        <li>
          <NavLink to="/microb">Micro App B</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
