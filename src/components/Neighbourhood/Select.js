import React from 'react';

export class Select extends React.Component {

    render() {
        return (
            <div style={{margin: '20px'}}>
                <div className='row'>
                        <select className="form-control" style={{marginLeft:'10px',width:'25%',display:'initial'}}>
                            <option selected>Select Neighbourhood</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-control" style={{marginLeft:'20px',width:'15%',display:'initial'}}>
                            <option selected>Time Period</option>
                            <option value="1">Last 7 days</option>
                            <option value="2">Last 30 days</option>
                        </select>
                </div>
            </div>
        );
    }
}
