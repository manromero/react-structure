import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './test4.scss';
import PropTypes from 'prop-types';

class Test4 extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>TEST 4: Prop Types</h1>
                <h2 className="colorRed">Prop Type: Se muestra un mensaje de advertencia al entrar en la consola</h2>
            </React.Fragment>
        );
    }
  
}

Test4.propTypes = {
    propTypeError: PropTypes.string.isRequired
}

export default withTranslation()(Test4);