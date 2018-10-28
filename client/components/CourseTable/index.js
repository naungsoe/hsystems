import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CourseTableRow from '../CourseTableRow';

const styles = theme => ({
  table: {
    minWidth: 760,
  },
  checkbox: {
    width: 72,
  },
});

function CourseTable(props) {
  const { classes } = props;
  const { onSelectAllClick, onRowClick } = props;
  const { courses } = props;
  const rowCount = courses.length;
  const numSelected = courses.filter(t => t.selected).length;

  return (
    <React.Fragment>
      <Table
        className={classes.table}
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox"
              className={classes.checkbox}
            >
              <Checkbox
                checked={numSelected === rowCount}
                indeterminate={numSelected > 0 && numSelected < rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
            <TableCell
              sortDirection="desc"
            >
              <TableSortLabel active={true}
                direction="desc"
              >
                Title
              </TableSortLabel>
            </TableCell>
            <TableCell>
              Start date
            </TableCell>
            <TableCell>
              End date
            </TableCell>
            <TableCell>
              Owner
            </TableCell>
            <TableCell>
              Last modified
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map(course => (
            <CourseTableRow
              key={course.id}
              course={course}
              onClick={onRowClick}
            />
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default onlyUpdateForKeys(['courses'])(
  withStyles(styles)(CourseTable)
);
