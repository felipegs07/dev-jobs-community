import React, { Component } from 'react';
import CommunityList from '../communities/CommunityList';

class Dashboard extends Component {
    render (){
        return (
            <div className="container">
                <CommunityList />
            </div>
        )
    }
}

export default Dashboard;