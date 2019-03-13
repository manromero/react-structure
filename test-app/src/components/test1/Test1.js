import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withTranslation } from 'react-i18next';
import './test1.scss';

class Test1 extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>TEST 1</h1>
                <h2>Test React Variables: {process.env.REACT_APP_TEST_VARIABLE ? process.env.REACT_APP_TEST_VARIABLE : ''}</h2>
                <h2 className="testScss">Test SCSS</h2>
                <TextField
                    id="standard-name"
                    label="Test Redux"
                    value={this.props.text}
                    onChange={(e) => this.props.updateTextAction(e.target.value)}
                />
                <h2>Test traducciones: {this.props.t('helloWorld', {usuario: this.props.text})}</h2>
            </React.Fragment>
        );
    }
  
}

Test1.propTypes = {
    updateTextAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default withTranslation()(Test1);