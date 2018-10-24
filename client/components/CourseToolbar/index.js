import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Search from '@material-ui/icons/Search';

const styles = theme => ({
  control: {
    margin: theme.spacing.unit * 3,
  },
});

function CourseToolbar(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid container
        direction="row"
      >
        <FormControl
          className={classes.control}
        >
          <Input
            id="adornment-search"
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Search/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          className={classes.control}
        >
          <Select
            value="all"
            inputProps={{
              name: 'owner',
              id: 'select-owner',
            }}
          >
            <MenuItem value="all">
              Owned by anyone
            </MenuItem>
            <MenuItem value="me">
              Owned by me
            </MenuItem>
            <MenuItem value="others">
              Not owned by me
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return { courses: state.courses };
};

export default withStyles(styles)(
  connect(
    mapStateToProps
  )(CourseToolbar)
);
