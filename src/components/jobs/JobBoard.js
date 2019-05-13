import React, { Component } from 'react';
import axios from 'axios';
import JobList from './JobList';

class JobBoard extends Component {
    state = {
        jobs: []
    }
    componentDidMount(){
        axios.get('https://api.github.com/repos/frontendbr/vagas/issues?state=open&per_page=100&page')
        .then((res) => {
            console.log(res);

            this.setState({
                jobs: res.data
            });
        });
        
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <JobList jobs={this.state.jobs} />
                </div>
            </div>
        )
    }
}

export default JobBoard;