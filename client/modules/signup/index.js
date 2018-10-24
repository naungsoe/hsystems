import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing.unit * 3,
    maxWidth: 560,
    minWidth: 320,
  },
});

function SignUp(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline/>
      <Grid container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <Paper
            className={classes.paper}
          >
            <Grid container spacing={24}>
              <Grid item container spacing={24}>
                <Grid item>
                  <Typography variant="title">
                    Create account
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={24}
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    placeholder="First name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    placeholder="Last name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                    placeholder="Username"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    placeholder="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    placeholder="Confirm password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={24}>
                <Grid item>
                  <Button color="primary"
                    variant="contained"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const SignUpPage = withStyles(styles)(SignUp);
ReactDOM.render(
  <SignUpPage/>,
  document.getElementById('container')
);
