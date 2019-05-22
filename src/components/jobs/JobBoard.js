import React, { Component, Fragment } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobFilters from './JobFilters';
import JobSearch from './JobSearch';
import Loading from '../layout/Loading';
import { Redirect } from 'react-router-dom';
import { clientId, clientSec } from '../../services/api';

class JobBoard extends Component {
   
    state = {
        jobs: [],
        labels: [],
        filters: {
            text: '',
            labels: []
        },
        notFoundAPI: false,
        loaded: false
    }

    handleApiGetLabels = () => {
        axios.get(`https://api.github.com/repos/${this.props.match.params.id}/vagas/labels?client_id=${clientId}&client_secret=${clientSec}&per_page=100`)
        .then((res) => {

            this.setState({
                labels: res.data
            });
        });
    }


    handleApiGetJobs = () => {
        let url = `https://api.github.com/repos/${this.props.match.params.id}/vagas/issues?client_id=${clientId}&client_secret=${clientSec}&state=open&per_page=100`;
        new Promise((resolve, reject) => {
            this.fetchingAllJobs(url, [], resolve, reject)
        })
        .then(response => {
            this.setState({
                jobs: response,
                loaded: true
            });
        });
    }

    fetchingAllJobs = (url, jobs, resolve, reject) => {
        axios.get(url)
        .then(response => {
            const retrivedJobs = jobs.concat(response.data);
            let nextUrl = this.getNextApiUrl(response.headers.link);

            if (nextUrl !== undefined){
                this.fetchingAllJobs(nextUrl, retrivedJobs, resolve, reject);
            }
            else {
                resolve(retrivedJobs);
            }
        })
        .catch(error => {
            console.log(error);
            reject('Algo deu errado, recarregue a página enquanto enviamos gatos espaciais para investigar isso.')
        });
    }

    getNextApiUrl = (links) => {
        if (links !== undefined && links !== ''){
                let parts = links.split(',').reduce((acc, link) => {
                let match = link.match(/<(.*)>; rel="(\w*)"/)
                let url = match[1]
                let rel = match[2]
                acc[rel] = url
                return acc;
            }, {})
            return parts['next'];
        }
        else {
            return undefined;
        }

         
    }


    handleJobSearch = (searchText) => {
        const updatedFilters = {
            ...this.state.filters,
            text: searchText
        }
        this.setState({
            filters: updatedFilters
        });
    }

    handleFilterJobs = (jobs, filters) => {
        if (jobs.length > 0){
            let filteredJobs = [];

            const textFilteredJobs = jobs.filter(job => {
                let title = job.title.toLowerCase()
                return title.indexOf(filters.text.toLowerCase()) > -1;
            });

            if(filters.labels.length > 0){
                filteredJobs = textFilteredJobs.filter(job => {
                   /* 
                    This method get all the jobs and make a filter.
                    This filter get each job from the list and build a array of the labels of each job itself.
                    After that, it makes a new array to filter using the filters choosen by the user. So, it gets each
                    filter of user and tests with all labels of the job. If that job has the filtered label, return +1.
                    For filtering, a job need to have all the filter labels, to test this it gets the 
                    contansFilterLabels result (the result is all the labels from the job that matches with the filter labels)
                    if this result length is equal the number of filters, means that job has all the filtering labels, 
                    so it returns a true
                    and the filter method from javascript returns the job for the array of filtered objects.
                    This array after this will be returned to render method and the magic happens... 
                   */

                    let jobLabels = job.labels.map(label => {
                        return label.name;
                    });

                    let containsFilterLabels = filters.labels.filter(jobFilter => {
                        return jobLabels.indexOf(jobFilter) > -1;
                    }).length === filters.labels.length;
                    
                    return containsFilterLabels;
                });

                return filteredJobs;
            }
            else {
                return textFilteredJobs;
            }

        }
        else {
            return jobs;
        }
    }

    handleFilterChange = (filterObj) => {
        let updatedFilters = [];
        const filters = [ ...this.state.filters.labels ]
        
        if (filters.length > 0){
            if (filters.includes(filterObj)){
                updatedFilters = filters.filter(label => {
                    return label !== filterObj;
                });
            }
            else {
                updatedFilters = [
                    ...filters,
                    filterObj
                ]
            }
        }
        else {
            updatedFilters = [
                ...filters,
                filterObj
            ]
        }
        
        this.setState({
            filters: {
                text: this.state.filters.text,
                labels: updatedFilters
            }
        });
        
    }

    componentDidMount(){
        this.handleApiGetJobs();
        this.handleApiGetLabels();
        
    }

    render(){
        const filteredJobs = this.handleFilterJobs(this.state.jobs, this.state.filters);
        if (this.state.notFoundAPI) return <Redirect to="/" />
        return (
            <div className="container">
                <div className="row">
                    {
                        (this.state.loaded) ? (
                            <Fragment>
                                <JobSearch jobSearch={this.handleJobSearch} />
                                <div className="center">
                                    <h4 style={{marginLeft: '15px'}} className="left-align">
                                        <span className="teal-text text-lighten-1">{ filteredJobs.length } </span>
                                        vagas em 
                                        <span className="teal-text text-lighten-1"> { this.props.match.params.id }</span>
                                    </h4>
                                </div>
                                <JobFilters labels={this.state.labels} handleFilter={this.handleFilterChange} />
                                <JobList jobs={filteredJobs} handleFilter={this.handleFilterChange} />
                            </Fragment>
                        ) : (<Loading />)
                    }
                    
                </div>
            </div>
        )
    }
}

export default JobBoard;