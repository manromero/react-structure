import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Datetime from 'react-datetime';

class Test5 extends Component {

    state = {
        selectedDate: null,
    };

    changeDate = () => {
        this.setState({ openCalendario: true });
    };

    render() {
        return (
            <React.Fragment>
                <h1>TEST 5: React Datetime</h1>
                <Datetime
                        value={this.props.value}
                        dateFormat={this.props.dateFormat}
                        timeFormat={this.props.timeFormat}
                        onChange={(selectedDate) => this.setState({selectedDate})}
                        inputProps={{ placeholder: 'Placeholder', disabled: false, id: 'id' }}
                        utc={true}
                    />
            </React.Fragment>
        );
    }
  
}

export default withTranslation()(Test5);