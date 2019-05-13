import React from 'react';
import { Link } from 'react-router-dom';

const CommSummary = (props) => {
    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src="https://www.nerdstickers.com.br/arquivos/2017/08/14395365731-1.jpeg" alt="logo" />
                    <span className="card-title">Card Title</span>
                    <Link to="" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
        </div>
    )
}

export default CommSummary;
