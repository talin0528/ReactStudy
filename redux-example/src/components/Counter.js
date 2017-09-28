import PropTypes from 'prop-types'
import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <Value/>
              <Control/>
            </div>
        );
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
      number: state.counter.number,
      color: state.ui.color
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => {
      dispatch(actions.increment())
    },

    handleDecrement: () => {
      dispatch(actions.decrement())
    },

    handleSecColor: () => {
      dispatch(actions.setColor(color))
    }

  };
};


export default Counter;
