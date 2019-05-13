import React from 'react';
import JobSummary from './JobSummary';

const JobList = (props) => {
    return (
        <div className="col s12 m10">
            {
                props.jobs.map(job => {
                    return (
                        <JobSummary title={job.title} url={job.url} key={job.id} />
                    )
                })
            }
        </div>
    )
}

export default JobList;