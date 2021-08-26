import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  document.title = 'Main SPA | Home';
  return (
    <div>
      <header className="Home-header">
        <img src={`${logo}`} className="App-logo" alt="logo" />
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
