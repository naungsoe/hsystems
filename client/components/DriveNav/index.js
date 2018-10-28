import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import Assignment from '@material-ui/icons/Assignment';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Storage from '@material-ui/icons/Storage';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import Pages from '@material-ui/icons/Pages';
import Public from '@material-ui/icons/Public';
import AlarmIcon from '@material-ui/icons/Alarm';
import DevicesOther from '@material-ui/icons/DevicesOther';
import Group from '@material-ui/icons/Group';
import Person from '@material-ui/icons/Person';

const styles = theme => ({
  selected: {
    color: theme.palette.primary.main,
  },
});

function DriveNav(props) {
  const { classes } = props;
  const { current } = props;

  return (
    <React.Fragment>
      <List>
          <ListItem button
            key={module.url}
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
    </React.Fragment>
  );
}

export default onlyUpdateForKeys(['current'])(
    withStyles(styles)(DriveNav)
);
