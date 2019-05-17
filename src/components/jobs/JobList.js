import React from 'react';
import JobSummary from './JobSummary';

const JobList = (props) => {
    return (
        <div className="col s12 m8">
            {
                props.jobs.map(job => {
                    return (
                        <JobSummary title={job.title} url={job.html_url} key={job.id} tags={job.labels} date={job.created_at}/>
                    )
                })
            }
        </div>
    )
}

export default JobList;