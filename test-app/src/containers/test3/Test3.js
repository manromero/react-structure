/*************************************************************
 * Pass to component redux variables and actions
 ************************************************************/ 

import Test3 from '../../components/test3/Test3';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { iniApiTestCall, apiTestCallSucess, apiTestCallError} from '../../actions';

export function mapStateToProps(state) {
    const result = {
        loading: state.test3State.loading,
        response: state.test3State.response,
        error: state.test3State.error
    };
    return result;
}

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
        {
            iniApiTestCall, apiTestCallSucess, apiTestCallError
        }, 
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test3);