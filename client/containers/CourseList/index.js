import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import CourseTable from '../../components/CourseTable';

const styles = theme => ({
  fab: {
    bottom: theme.spacing.unit * 3,
    position: 'fixed',
    right: theme.spacing.unit * 3,
  },
});

function CourseList(props) {
  const { classes } = props;
  const { courses } = props;
  const { onAllRowsSelect, onRowSelect } = props;

  function onCreate() {
    locationn
  }

  return (
    <React.Fragment>
      <Toolbar/>
      <Toolbar>
        <Grid item container
          alignItems="center"
          direction="row"
        >
          <Grid item sm>
            <Typography variant="title">
              Courses
            </Typography>
          </Grid>
          <Grid item>
            <FormControl
              className={classes.control}
            >
              <Input fullWidth
                id="adornment-search"
                placeholder="Search courses"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Toolbar>
      <CourseTable courses={courses}
        onSelectAllClick={onAllRowsSelect}
        onRowClick={onRowSelect}
      />
      <Button color="secondary"
        variant="fab"
        className={classes.fab}
        href="/create"
      >
        <AddIcon/>
      </Button>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  courses: [...state.courses]
});

const mapDispatchToProps = dispatch => ({
  onAllRowsSelect() {
    dispatch({
      type: 'SELECT_COURSES'
    });
  },
  onRowSelect(course) {
    dispatch({
      ...course,
      type: 'SELECT_COURSE'
    });
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CourseList)
);
