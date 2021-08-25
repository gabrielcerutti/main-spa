import '../App.css';

const About = () => (
  <main className="About-main">
    <div className="About-container">
      <h2>About this site</h2>
      <p>
        Main SPA was created by{' '}
        <a className="App-link" href="https://www.linkedin.com/in/gabrielcerutti/">
          Gabriel Cerutti
        </a>{' '}
        to demonstrate just one way that micro frontends can be implemented. Inspired by{' '}
        <a className="App-link" href="https://twitter.com/thecamjackson">
          Cam Jackson
        </a>{' '}
        demo, check out the{' '}
        <a
          className="App-link"
          href="https://martinfowler.com/articles/micro-frontends.html"
        >
          long-form article that Cam wrote for martinfowler.com
        </a>
        .
      </p>
      <p>
        Micro frontends is an architectural style where independently deliverable frontend
        applications are composed into a greater whole. It&apos;s useful for breaking up
        monolithic frontend codebases into smaller, simpler applications that can be
        delivered to production by multiple teams independently.
      </p>
      <p>
        If you just want to read the source code for yourself, it&apos;s all available on
        Github at{' '}
        <a className="App-link" href="https://github.com/gabrielcerutti/main-spa">
          https://github.com/gabrielcerutti/main-spa
        </a>
        .
      </p>
    </div>
  </main>
);

export default About;
