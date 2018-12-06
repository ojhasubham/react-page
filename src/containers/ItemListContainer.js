import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/items/Items';

class ItemListContainer extends Component {
    render() {
        return (
            <Items {...this.props} />
        )
    }
}

export default connect(
    state => ({
        items: state.ItemsReducer.items,
        status: state.ItemsReducer.status,
    })
)(ItemListContainer)