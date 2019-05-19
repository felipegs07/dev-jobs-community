import React, { Component } from 'react';

class JobSearch extends Component  {
    state = {
        search: ''
    }

    handleSearchText = (e) => {
        this.setState({
            search: e.target.value
        });
    }
    render (){
        return (
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <div className="search-wrapper col s11">
                            <input placeholder="Pesquisar vagas" id="jobSearch" type="text" onChange={this.handleSearchText} value={this.state.search} />
                        </div>
                        <button className="btn" onClick={() => this.props.jobSearch(this.state.search)}>
                            <i className="material-icons medium">search</i>
                        </button>
                    </div>
                </div>
            </div>
          )
    }
}

export default JobSearch;
