import React, { Component } from 'react';
import CommSummary from './CommSummary';

class CommunityList extends Component {
    
    render (){
        return (
            <div className="row">
                <CommSummary />
                <CommSummary />
                <CommSummary />
                <CommSummary />
            </div>
        )
    }
}

export default CommunityList;