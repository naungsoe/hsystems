import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ComputerIcon from '@material-ui/icons/Computer';
import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DeleteIcon from '@material-ui/icons/Delete';

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
        <ListItem button>
          <ListItemIcon>
            <ComputerIcon/>
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography color="inherit"
                variant="subtitle1"
              >
                My Drive
              </Typography>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon/>
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography color="inherit"
                variant="subtitle1"
              >
                Shared with me
              </Typography>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ScheduleIcon/>
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography color="inherit"
                variant="subtitle1"
              >
                Recent
              </Typography>
            }
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon/>
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography color="inherit"
                variant="subtitle1"
              >
                Trash
              </Typography>
            }
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default onlyUpdateForKeys(['current'])(
    withStyles(styles)(DriveNav)
);
