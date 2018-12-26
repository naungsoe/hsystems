import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

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
