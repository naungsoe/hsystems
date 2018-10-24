import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppHeader from '../../components/AppHeader';
import AppNavDrawer from '../../components/AppNavDrawer';
import AppNav from '../../components/AppNav';
import AppContent from '../../components/AppContent';
import NotificationMenu from '../../components/NotificationMenu';
import AccountMenu from '../../components/AccountMenu';
import CourseList from '../../containers/CourseList';
import state from './state';
import storeFactory from './store';

const store = storeFactory(state);

const styles = theme => ({

});

function Courses(props) {
  const { classes, width } = props;
  const { onMenuToggle } = props;
  const module = props.modules.filter(
    module => (module.label === 'Courses'))[0];
  const fullWidth = isWidthUp('md', props.width)
    ? !props.menu.open : true;
  const open = isWidthUp('md', props.width)
    ? props.menu.open : !props.menu.open;
  const variant = isWidthUp('md', props.width)
    ? 'persistent' : 'temporary';

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppHeader {...props}
        onMenuClick={onMenuToggle}
      >
        <NotificationMenu {...props}/>
        <AccountMenu {...props}/>
      </AppHeader>
      <AppNavDrawer {...props}
        open={open}
        variant={variant}
        onClose={onMenuToggle}
      >
        <AppNav
          current={module.label}
          {...props}
        />
      </AppNavDrawer>
      <AppContent {...props}
        fullWidth={fullWidth}
      >
        <CourseList/>
      </AppContent>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  onMenuToggle() {
    dispatch({
      type: 'TOGGLE_MENU'
    });
  }
});

const CoursesPage = withStyles(styles)(withWidth()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Courses)
));

ReactDOM.render(
  <Provider store={store}>
    <CoursesPage/>
  </Provider>,
  document.getElementById('container')
);
