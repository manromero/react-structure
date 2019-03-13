import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

  const styles = theme => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
      width: '50%',
      height: '50vh'
    },
  });

class CalendarTest extends Component {    
      
  render() {

    const { classes } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment)

    return (

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <div className={classes.paper}>
            <BigCalendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
            />
            <CalendarTestWrapped />
          </div>
        </Modal>
    );
  }
}

CalendarTest.propTypes = {
    classes: PropTypes.object.isRequired
  };

const CalendarTestWrapped = withStyles(styles)(CalendarTest);

export default CalendarTestWrapped;