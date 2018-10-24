import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { toRenderProps, withState } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  popper: {
    minWidth: 280,
    maxWidth: 280,
    zIndex: 2,
  },
  user: {
    padding: theme.spacing.unit * 2,
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  menu:  {
    backgroundColor: theme.palette.background.default,
  },
});

const WithState = toRenderProps(
  withState('anchorEl', 'updateAnchorEl', null)
);

function AccountMenu(props) {
  const { classes } = props;
  const { user } = props;

  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);

        const handleClick = (e) => {
          const { currentTarget } = e;
          updateAnchorEl(currentTarget);
        };

        const handleClose = (e) => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <IconButton color="inherit"
              onClick={handleClick}
            >
               <AccountCircle/>
            </IconButton>
            <Popper disablePortal
              placement="bottom-end"
              anchorEl={anchorEl}
              className={classes.popper}
              open={open}
            >
              <Paper>
                <ClickAwayListener
                  onClickAway={handleClose}
                >
                  <Grid container
                    direction="column"
                  >
                    <Grid item
                      className={classes.user}
                    >
                      <Typography noWrap
                        component="div"
                        variant="subheading"
                        className={classes.name}
                      >
                        {user.name}
                      </Typography>
                      <Typography noWrap
                        component="div"
                        variant="subheading"
                      >
                        {user.email}
                      </Typography>
                    </Grid>
                    <Grid item
                      className={classes.menu}
                    >
                      <Divider/>
                      <MenuList>
                        <MenuItem dense>
                          View account
                        </MenuItem>
                        <MenuItem dense>
                          Sign out
                        </MenuItem>
                      </MenuList>
                    </Grid>
                  </Grid>
                </ClickAwayListener>
              </Paper>
            </Popper>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default onlyUpdateForKeys(['user'])(
  withStyles(styles)(AccountMenu)
);
