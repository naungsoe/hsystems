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

function AppNav(props) {
  const { classes } = props;
  const { application, current } = props;

  function renderIcon(icon) {
    switch(icon) {
      case 'Dashboard':
        return <Dashboard/>;
      case 'Assignment':
        return <Assignment/>;
      case 'LibraryBooks':
        return <LibraryBooks/>;
      case 'Storage':
        return <Storage/>;
      case 'LocalLibrary':
        return <LocalLibrary/>;
      case 'Public':
        return <Public/>;
      case 'Pages':
        return <Pages/>;
      case 'Alarm':
        return <AlarmIcon/>;
      case 'DevicesOther':
        return <DevicesOther/>;
      case 'Group':
        return <Group/>;
      case 'Person':
        return <Person/>;
      default:
        return;
    }
  }

  return (
    <React.Fragment>
      <List>
        {application.modules.map((module, index, array) => (
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
                  variant="subtitle1"
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

export default onlyUpdateForKeys(
  ['modules', 'current'])(
    withStyles(styles)(AppNav)
);
