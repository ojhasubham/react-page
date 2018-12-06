import React from 'react';
import NavSearchContainer from '../containers/NavSearchContainer';
import ItemListContainer from '../containers/ItemListContainer';
import UserContainer from '../containers/UserContainer';

const Main = () => (
    <div>
        <NavSearchContainer />
        <UserContainer />
        <ItemListContainer />
    </div>
)

export default Main;
