import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/header/Header';
import { fetchUser, fetchItems } from '../actions';

class NavSearchContainer extends Component {
    render() {
        return (
            <NavBar {...this.props} />
        )
    }
}

export default connect(
    state => ({}), {
        fetchUser, fetchItems
    }
)(NavSearchContainer)