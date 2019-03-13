import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {PATH_EMPTY, PATH_TEST_1, PATH_TEST_2, PATH_TEST_3, PATH_TEST_4, PATH_TEST_5} from '../../constants';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Menu extends React.Component {

  render() {
    const { classes } = this.props;

    const currentPath = this.props.history.location.pathname === PATH_EMPTY ? PATH_TEST_1 : this.props.history.location.pathname;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={currentPath} onChange={(e, value) => this.props.history.push(value)}>
            <Tab value={PATH_TEST_1} label="Test 1: Comunes" />
            <Tab value={PATH_TEST_2} label="Test 2: Calendario" />
            <Tab value={PATH_TEST_3} label="Test 3: Axios" />
            <Tab value={PATH_TEST_4} label="Test 4: Prop Types" />
            <Tab value={PATH_TEST_5} label="Test 5: React Datetime" />
          </Tabs>
        </AppBar>
        <TabContainer>{this.props.child}</TabContainer>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);