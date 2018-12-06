import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/items/Items';
import User from '../components/user/User';

class ItemListContainer extends Component {
    render() {
        return (
            <Items {...this.props} />
        )
    }
}

export default connect(
    state => ({
        json: state.ItemsReducer.json,
    })
)(ItemListContainer)