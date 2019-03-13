/*************************************************************
 * Pass to component redux variables and actions
 ************************************************************/ 

import Test1 from '../../components/test1/Test1';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTextAction }from '../../actions';

export function mapStateToProps(state) {
    const result = {
        text: state.test1State.text
    };
    return result;
}

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
        {
            updateTextAction
        }, 
        dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test1);