import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    minWidth: 0,
    width: '100%',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: `calc(100vh - 100px)`,
      '&::-webkit-scrollbar': {
        width: 8,
        height: 8,
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'grey',
        border: 'none',
      },
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '-webkit-overflow-scrolling': 'touch',
  },
}));

const Workspace = ({ children }) => {
  console.log('Workspace rendering...');
  const classes = useStyles();

  return (
    <main id="main-spa-container" className={classes.content}>
      {children}
    </main>
  );
};

Workspace.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Workspace;
