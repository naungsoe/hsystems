import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppHeader from '../../components/AppHeader';
import NotificationMenu from '../../components/NotificationMenu';
import AccountMenu from '../../components/AccountMenu';
import NavDrawer from '../../components/NavDrawer';
import state from './state';
import storeFactory from './store';

const store = storeFactory(state);

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  }
});

function Dashboard(props) {
  const { classes } = props;
  const { organization,
    user,
    modules,
    notifications
  } = props;

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppHeader organization={organization}>
        <NotificationMenu notifications={notifications}/>
        <AccountMenu user={user}/>
      </AppHeader>
      <Grid container
        direction="row"
        wrap="nowrap"
        className={classes.root}
      >
        <Grid item>
          <NavDrawer modules={modules}
            selected='Dashboard'
          />
        </Grid>
        <Grid item
          className={classes.content}
        >
          <Toolbar/>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6} lg={9} xl={10}>
              Active Courses
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={2}>
              Recent Activity
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return { ...state };
};

const DashboardPage = withStyles(styles)(
  connect(
    mapStateToProps
  )(Dashboard)
);

ReactDOM.render(
  <Provider store={store}>
    <DashboardPage/>
  </Provider>,
  document.getElementById('container')
);
