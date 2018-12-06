import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/user/User';

class UserContainer extends Component {
    render() {
        return (
            <User {...this.props} />
        )
    }
}

export default connect(
    state => ({
        user: state.UserReducer.user,
        status: state.UserReducer.status
    })
)(UserContainer)