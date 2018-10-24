import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
    marginLeft: 240,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    transition: 'margin-left .25s',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  noMarginLeft: {
    marginLeft: 0,
  },
});

function AppContent(props) {
  const { classes, fullWidth } = props;
  const { children } = props;

  return (
    <React.Fragment>
      <main className={classNames(classes.content,
        fullWidth ? classes.noMarginLeft : '')
      }>
        {children}
      </main>
    </React.Fragment>
  );
}

export default withStyles(styles)(AppContent);
