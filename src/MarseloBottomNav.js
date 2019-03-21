import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home'
import Explore from '@material-ui/icons/Explore'
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import Notification from '@material-ui/icons/Notifications';
import Schedule from '@material-ui/icons/Schedule';
import Person from '@material-ui/icons/Person';

const styles = {
  root: {
    width: '100%',
    position: 'sticky',
    bottom: 0,
  },
};

class MarseloBottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}

      >
        <BottomNavigationAction label="Home" icon={<Home />} /> 
        <BottomNavigationAction label="Tiket" icon={<Notification />} />
        <BottomNavigationAction label="Jadwal" icon={<Schedule />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    );
  }
}

MarseloBottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarseloBottomNav);