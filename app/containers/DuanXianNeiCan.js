import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DuanXianNeiCan from '../components/DuanXianNeiCan';
import * as actionTypes from '../actions/duan_xian_nei_can'

function mapStateToProps(state) {
  return {
    state:state.duan_xian_nei_can,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(actionTypes,dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuanXianNeiCan);
