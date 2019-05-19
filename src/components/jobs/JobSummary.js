import React from 'react';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import Filter from './Filter';

const JobSummary = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{ props.title }</span>
                <p><a href={ props.url } target="_blank" rel="noopener noreferrer" className="btn">ver vaga</a></p>
                <div className="tech">
                    {
                        props.tags.map(tag => {
                            return (
                                <Filter key={tag.id} id={tag.id} name={tag.name} handleFilter={props.handleFilter} />
                            )
                        })
                    }
                </div>
                <p  className="grey-text text-darken-1" style={{ marginTop: '15px' }}>{ moment(props.date).locale('pt-br').fromNow() }</p>
            </div>
        </div>
    )
}

export default JobSummary;