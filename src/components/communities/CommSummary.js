import React from 'react';
import { Link } from 'react-router-dom';

const CommSummary = (props) => {
    const newTo = { 
        pathname: `/jobs/${props.id}`, 
        repoPath: props.path 
      };
    return (
        <div className="col s12 m4">
            <Link to={newTo}>
                <div className="card">
                    <div className="card-image" style={{ height: '150px', maxHeight: '150px' }}>
                        <img src={props.img} alt="logo" style={{ maxHeight: '150px', width: '70%', overflow: 'hidden', margin: '0 auto' }} />
                    </div>
                    <div className="card-content">
                        <span className="card-title black-text">{props.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CommSummary;
