import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { toRenderProps, withState } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import StorageIcon from '@material-ui/icons/Storage';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PagesIcon from '@material-ui/icons/Pages';
import PublicIcon from '@material-ui/icons/Public';
import AlarmIcon from '@material-ui/icons/Alarm';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';

const styles = theme => ({
  popper: {
    minWidth: 280,
    maxWidth: 280,
    zIndex: 2,
  },
  paper: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  list: {
    color: theme.palette.text.primary,
    maxHeight: 320,
    overflow: 'auto',
  },
});

const WithState = toRenderProps(
  withState('anchorEl', 'updateAnchorEl', null)
);

function AppMenu(props) {
  const { classes } = props;
  const { application } = props;
  const { modules, current } = application;

  function needDivider(module, nextModule) {
    if (module && module.group
        && nextModule && nextModule.group) {
      return module.group !== nextModule.group;
    }
  }

  function renderIcon(icon) {
    switch(icon) {
      case 'Dashboard':
        return <DashboardIcon/>;
      case 'Assignment':
        return <AssignmentIcon/>;
      case 'LibraryBooks':
        return <LibraryBooksIcon/>;
      case 'Storage':
        return <StorageIcon/>;
      case 'LocalLibrary':
        return <LocalLibraryIcon/>;
      case 'Public':
        return <PublicIcon/>;
      case 'Pages':
        return <PagesIcon/>;
      case 'Alarm':
        return <AlarmIcon/>;
      case 'DevicesOther':
        return <DevicesOtherIcon/>;
      case 'Group':
        return <GroupIcon/>;
      case 'Person':
        return <PersonIcon/>;
      default:
        return;
    }
  }

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
               <AppsIcon/>
            </IconButton>
            <Popper disablePortal
              placement="bottom-end"
              anchorEl={anchorEl}
              className={classes.popper}
              open={open}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener
                  onClickAway={handleClose}
                >
                  <List disablePadding
                    className={classes.list}
                  >
                    {application.modules.map((module, index, array) => (
                      <ListItem button
                        key={module.url}
                        divider={needDivider(
                          module, array[index + 1]
                        )}
                        className={
                          (module.label === current)
                            ? classes.selected : ''
                        }
                      >
                        <ListItemIcon
                          className={
                            (module.label === current)
                              ? classes.selected : ''
                          }
                        >
                          {renderIcon(module.icon)}
                        </ListItemIcon>
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography color="inherit"
                              variant="subheading"
                            >
                              {module.label}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </ClickAwayListener>
              </Paper>
            </Popper>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default onlyUpdateForKeys(['application'])(
  withStyles(styles)(AppMenu)
);
