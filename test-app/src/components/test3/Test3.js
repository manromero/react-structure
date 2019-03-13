import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { callTest }  from '../../api';

class Test3 extends Component {

    componentDidMount() {
        this.props.iniApiTestCall();
        const request = callTest();
        request
            .then((response) => {
                this.props.apiTestCallSucess(response)
            })
            .catch((error) => {
                this.props.apiTestCallError(error)
            });
    }

    render() {
        return (
            <React.Fragment>
                <h1>TEST 3: Axios</h1>
                <h2>Loading: {'' + this.props.loading}</h2>
                <h2>Response: {'' + JSON.stringify(this.props.response)}</h2>
                <h2>Error: {JSON.stringify(this.props.error)}</h2>
            </React.Fragment>
        );
    }
  
}

export default withTranslation()(Test3);