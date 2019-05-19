import React from 'react';
import Filter from './Filter';

const JobFilters = (props) => {
  return (
    <div className="col s12 m4">
       <div className="card">
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Filtrar:</span>
              <div className="tech">
                {
                  props.labels.map(label => {
                    return (
                      <Filter key={label.id} id={label.id} name={label.name} handleFilter={props.handleFilter} />
                    )
                  })
                }
              </div>
            </div>
       </div>
    </div>
  )
}

export default JobFilters;
