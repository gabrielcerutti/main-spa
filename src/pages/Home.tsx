// import logo from '../logo.svg';
import triunfador from '../assets/images/triunfador.jpg';
import '../App.css';

const Home = () => {
  document.title = 'Main SPA | Home';
  return (
    <div>
      <header className="Home-header">
        <a
          href="https://open.spotify.com/album/26vh26M3hPs7BMelYSQ6iH?si=p0WL7xmcRMyHs_bswRhp9Q&dl_branch=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={triunfador} className="Home-logo" alt="logo" />
        </a>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://martinfowler.com/articles/micro-frontends.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          ...and Micro-Frontends Concepts!
        </a>
      </header>
    </div>
  );
};

export default Home;
