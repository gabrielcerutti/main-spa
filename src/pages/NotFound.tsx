import { NavLink } from 'react-router-dom';
import '../App.scss';

const NotFound = () => {
  document.title = 'Main SPA | NotFound';
  return (
    <main className="Notfound-main">
      <div className="Notfound-container">
        <h2>Oops! Sorry, Page Not Found</h2>
        <h3>
          You should probably go back to{' '}
          <NavLink className="App-link" to="/">
            Home
          </NavLink>
        </h3>
      </div>
    </main>
  );
};

export default NotFound;
