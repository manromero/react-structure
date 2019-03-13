import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CalendarTestWrapped from './CalendarTest';
import { withTranslation } from 'react-i18next';

class Test2 extends Component {

    state = {
        openCalendario: false,
    };

    handleOpen = () => {
        this.setState({ openCalendario: true });
    };

    handleClose = () => {
        this.setState({ openCalendario: false });
    };

    render() {
        return (
            <React.Fragment>
                <h1>TEST 2: Calendario</h1>
                <Button variant="contained" color="primary" onClick={this.handleOpen}>
                    Abrir Calendario
                </Button>
                <CalendarTestWrapped open={this.state.openCalendario} handleClose={this.handleClose}/>
            </React.Fragment>
        );
    }
  
}

export default withTranslation()(Test2);