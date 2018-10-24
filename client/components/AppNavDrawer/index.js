import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = theme => ({
  drawer: {
    backgroundColor: theme.palette.background.paper,
    borderRight: 0,
    marginTop: 64,
    width: 240,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
});

function AppNavDrawer(props) {
  const { classes, children } = props;
  const { onClose, open, variant } = props;

  return (
    <React.Fragment>
      <Drawer anchor="left"
        open={open}
        variant={variant}
        classes={{
          paper: classes.drawer,
        }}
        onClose={onClose}
      >
        {children}
      </Drawer>
    </React.Fragment>
  );
}

export default onlyUpdateForKeys(
  ['onClose', 'open', 'variant'])(
    withStyles(styles)(AppNavDrawer)
);
