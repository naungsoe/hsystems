import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menu: {
    marginLeft: -theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
  },
  organization: {
    flexGrow: 1,
  },
});

function AppHeader(props) {
  const { classes, children } = props;
  const { onMenuClick } = props;
  const { application } = props;
  const { organization } = application.user;

  return (
    <React.Fragment>
      <AppBar position="fixed"
        className={classes.appbar}
      >
        <Toolbar>
          <IconButton color="inherit"
            className={classes.menu}
            onClick={onMenuClick}
          >
            <MenuIcon/>
          </IconButton>
          <Typography color="inherit"
            variant="h6"
            className={classes.organization}
          >
            {organization.name}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default onlyUpdateForKeys(['organization'])(
  withStyles(styles)(AppHeader)
);
