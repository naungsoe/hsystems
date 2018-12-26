import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = theme => ({
  card: {
    maxWidth: 240,
  },
  media: {
    height: 135,
  },
});

function CourseCard(props) {
  const { classes } = props;
  const { course } = props;

  return (
    <Card
      className={classes.card}
    >
      <CardActionArea>
        <CardMedia
          image="https://dummyimage.com/240x135/eee/000"
          title={course.title}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom
            variant="subtitle1"
          >
            {course.title}
          </Typography>
          <Typography gutterBottom>
            {course.description}
          </Typography>
          <Typography color="textSecondary">
            {course.createdOn}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(CourseCard);
