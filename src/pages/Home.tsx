import triunfador from '../assets/images/triunfador.jpg';
import '../App.scss';

const Home = () => {
  document.title = 'Main SPA | Home';
  return (
    <div>
      <header className="Home-header">
        <img src={triunfador} className="Home-logo" alt="logo" />
        <p>
          Main SPA (Single Page Application) is a Lightweight Container Application for
          Micro-Frontends.
        </p>
        <a
          className="App-link"
          href="https://martinfowler.com/articles/micro-frontends.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Micro-Frontends Concepts!
        </a>
      </header>
    </div>
  );
};

export default Home;
