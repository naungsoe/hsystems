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
    maxWidth: 360,
    minWidth: 320,
  },
});

function SignIn(props) {
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
              <Grid item xs={12}>
                <Typography variant="h6">
                  Sign in
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth
                  placeholder="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth
                  placeholder="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={4}>
                <Button color="primary"
                  variant="contained"
                >
                  Sign in
                </Button>
              </Grid>
              <Grid item xs={8} container
                justify="flex-end"
              >
                <Grid item>
                  <Button color="primary">
                    Forgot password?
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );headd
}

const SignInPage = withStyles(styles)(SignIn);
ReactDOM.render(
  <SignInPage/>,
  document.getElementById('container')
);
