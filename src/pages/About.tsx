import '../App.scss';

const About = () => {
  document.title = 'Main SPA | About';
  return (
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
          Micro frontends is an architectural style where independently deliverable
          frontend applications are composed into a greater whole. It&apos;s useful for
          breaking up monolithic frontend codebases into smaller, simpler applications
          that can be delivered to production by multiple teams independently.
        </p>
        <div className="About-p">
          If you just want to read the source code for yourself, it&apos;s all available
          on Github at
          <ul className="About-list">
            <li>
              <a className="App-link" href="https://github.com/gabrielcerutti/main-spa">
                https://github.com/gabrielcerutti/main-spa
              </a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://github.com/gabrielcerutti/micro-frontend-x"
              >
                https://github.com/gabrielcerutti/micro-frontend-x
              </a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://github.com/gabrielcerutti/micro-frontend-y"
              >
                https://github.com/gabrielcerutti/micro-frontend-y
              </a>
            </li>
          </ul>
        </div>
        <p>
          Also, check out the CRA microfrontend-typescript template, it&apos;s available
          on npm registry at{' '}
          <a
            className="App-link"
            href="https://www.npmjs.com/package/cra-template-microfrontend-typescript"
          >
            https://www.npmjs.com/package/cra-template-microfrontend-typescript
          </a>
          .
        </p>
        <p>Reach out to me for any question, I will be glad to help you out :)</p>
      </div>
    </main>
  );
};

export default About;
