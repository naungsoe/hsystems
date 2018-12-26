import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { toRenderProps, withState } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  popper: {
    minWidth: 320,
    maxWidth: 320,
    zIndex: 2,
  },
  header:  {
    padding: theme.spacing.unit,
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  list: {
    backgroundColor: theme.palette.background.default,
    maxHeight: 240,
    overflow: 'auto',
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

const WithState = toRenderProps(
  withState('anchorEl', 'updateAnchorEl', null)
);

function NotificationMenu(props) {
  const { classes } = props;
  const { notifications } = props;

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
              <Badge color="secondary"
                badgeContent={3}
              >
                <NotificationsIcon/>
              </Badge>
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
                      className={classes.header}
                    >
                      <Typography align="center"
                        color="textSecondary"
                        variant="subtitle1"
                        className={classes.title}
                      >
                        Notifications
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider/>
                      <List disablePadding
                        className={classes.list}
                      >
                        {notifications.map((notification) => (
                          <ListItem button divider
                            key={notification.id}
                          >
                            <Avatar>
                              <AccountCircleIcon/>
                            </Avatar>
                            <ListItemText
                              disableTypography
                              primary={
                                <Typography component="div">
                                  <strong className={classes.name}>
                                    {notification.assignedBy.name}
                                  </strong>
                                  &nbsp;{notification.message}
                                </Typography>
                              }
                              secondary={
                                <Typography color="textSecondary"
                                  component="div"
                                >
                                  {notification.assignedOn}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Divider/>
                    </Grid>
                    <Grid>
                      <List disablePadding>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary={
                              <Typography align="center"
                                color="primary"
                              >
                                View all notifications
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
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

export default onlyUpdateForKeys(['notifications'])(
  withStyles(styles)(NotificationMenu)
);
