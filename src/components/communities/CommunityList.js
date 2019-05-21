import React from 'react';
import CommSummary from './CommSummary';

const CommunityList = (props) => {
    return (
        <div className="row">
            {
                props.list.map(community => {
                    return (
                        <CommSummary key={community.id} img={community.img} name={community.name} id={community.id} path={community.path} />
                    )
                })
            
            }
        </div>
    )
}

export default CommunityList;