import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  checkbox: {
    width: 72,
  },
});

function CourseTableRow(props) {
  const { classes } = props;
  const { onClick } = props;
  const { course } = props;

  return (
    <React.Fragment>
      <TableRow
        onClick={() => onClick(course)}
      >
        <TableCell padding="checkbox"
          className={classes.checkbox}
        >
          <Checkbox checked={!!course.selected}/>
        </TableCell>
        <TableCell component="th"
          scope="row"
        >
          {course.title}
        </TableCell>
        <TableCell>
          {course.startDate}
        </TableCell>
        <TableCell>
          {course.endDate}
        </TableCell>
        <TableCell>
          {course.createdBy.name}
        </TableCell>
        <TableCell>
          {course.createdOn}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default onlyUpdateForKeys(['course'])(
  withStyles(styles)(CourseTableRow)
);
