import React from 'react';

const JobSummary = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{ props.title }</span>
                <p><a href={ props.url } target="_blank" rel="noopener noreferrer" className="btn">ver vaga</a></p>
            </div>
        </div>
    )
}

export default JobSummary;