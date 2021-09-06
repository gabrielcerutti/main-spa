import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';

function parseHost(host) {
  let url = new URL(host);
  let port = url.port !== '' ? ':' + url.port : '';
  return `${url.protocol}//${url.hostname}${port}`;
}

const styles = createStyles(() => ({
  loading: {
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loadingIndicator: {
    color: '#282c34',
  },
  error: {
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

class MicroFrontend extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'Main SPA | ' + props.name;
    this.state = {
      status: 'loading',
    };
  }

  componentDidMount() {
    const { id, host, document } = this.props;
    let baseHost = parseHost(host);
    console.log(`Host is ${baseHost}`);

    const scriptId = `micro-frontend-script-${id}`;

    this.setState({
      ...this.state,
    });

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      this.renderMicroFrontend();
      return;
    }

    if (this.props.loadType === 'not-optimized') {
      // This is a regular React build but in one file (without code splitting)
      fetch(`${host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          const script = document.createElement('script');
          script.id = scriptId;
          script.crossOrigin = '';
          script.src = `${baseHost}${manifest.files['main.js']}`;
          script.onload = this.renderMicroFrontend;
          document.head.appendChild(script);
          const css = manifest.files['main.css'];
          if (css !== undefined) {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = `${baseHost}${manifest.files['main.css']}`;
            document.head.appendChild(style);
          }
        })
        .catch((error) => {
          console.error(`Error loading micro-frontend ${id} - ${error.message}`);
          this.setState({
            ...this.state,
            status: 'error',
          });
        });
    } else if (this.props.loadType === 'optimized') {
      // This is a regular React build using code splitting
      fetch(`${host}/asset-manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          let chunkCount = -1;
          Object.keys(manifest['files'])
            .filter((key) => key.endsWith('.js'))
            .forEach((key, _, arr) => {
              if (chunkCount < 0) {
                chunkCount = arr.length;
              }
              const path = `${baseHost}${manifest['files'][key]}`;
              const script = document.createElement('script');
              if (key === 'main.js') {
                script.id = scriptId;
              }
              script.onload = () => {
                chunkCount--;
                if (chunkCount === 0) {
                  this.renderMicroFrontend();
                }
              };
              script.src = path;
              document.head.appendChild(script);
            });
        })
        .catch((error) => {
          console.error(`Error loading micro-frontend ${id} - ${error.message}`);
          this.setState({ ...this.state, status: 'error' });
        });
    } else if (this.props.loadType === 'bundle') {
      // This is just a bundle file (no manifest)
      const script = document.createElement('script');

      script.id = scriptId;
      script.src = host;

      document.body.appendChild(script);
      script.onload = this.renderMicroFrontend;
    } else {
      throw new Error('You must define a loadType.');
    }
  }

  componentDidUpdate() {
    if (this.state.status === 'done') {
      const { microId, window, history, basePath, host } = this.props;
      let baseHost = parseHost(host);
      console.log(`Host is ${baseHost}`);

      if (this.props.buildMode === 'regular') {
        window[`render${microId}`](`${microId}-container`, {
          basePath: basePath,
          host: baseHost,
          history: history,
        });
      } else {
        // library mode
        window[microId].render(`${microId}-container`, history, {
          basePath: basePath,
          host: baseHost,
          history: history,
        });
      }
    }
  }

  componentWillUnmount() {
    const { microId, window } = this.props;
    const scriptId = `micro-frontend-script-${microId}`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.removeEventListener('load', this.renderMicroFrontend);
    }

    if (this.props.buildMode === 'regular') {
      if (window[`unmount${microId}`]) {
        window[`unmount${microId}`](`${microId}-container`);
      }
    } else {
      if (window[microId]) {
        window[microId].unMount(`${microId}-container`);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if status change
    return nextState.status !== this.state.status;
  }

  renderMicroFrontend = () => {
    this.setState({ ...this.state, status: 'done' });
  };

  render() {
    const { classes } = this.props;
    let microModule;
    if (this.state.status === 'loading') {
      microModule = (
        <div className={classes.loading}>
          <CircularProgress className={classes.loadingIndicator}></CircularProgress>
        </div>
      );
    } else if (this.state.status === 'done') {
      microModule = <div id={`${this.props.microId}-container`}></div>;
    } else if (this.state.status === 'error') {
      microModule = (
        <div className={classes.error}>
          <Typography variant="overline" display="block" gutterBottom>
            Oops! An error occurred loading the micro-app, please refresh the page.
          </Typography>
        </div>
      );
    } else {
      microModule = (
        <div className={classes.error}>
          <Typography variant="overline" display="block" gutterBottom>
            Oops!An unexpected error occurred, please try refreshing the page.
          </Typography>
        </div>
      );
    }

    return microModule;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
  buildMode: 'library',
};

MicroFrontend.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
  microId: PropTypes.string.isRequired,
  document: PropTypes.object,
  loadType: PropTypes.oneOf(['optimized', 'not-optimized', 'bundle']).isRequired,
  buildMode: PropTypes.oneOf(['library', 'regular']),
  window: PropTypes.object,
  history: PropTypes.object,
  classes: PropTypes.any,
};

export default withStyles(styles)(MicroFrontend);
