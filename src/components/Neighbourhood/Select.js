import React from 'react';

export class Select extends React.Component {

    render() {
        return (
            <div style={{margin: '20px'}}>
                <div className='row'>
                        <select className="form-control" style={{marginLeft:'10px',width:'25%',display:'initial'}} onChange={this.props.toggleTeam}>
                            <option selected>Select Neighbourhood</option>
                            <option selected value="1">Platform Services</option>
                            {/*<option value="2">Corporate Technology</option>*/}
                            {/*<option value="3">End User Services</option>*/}
                        </select>
                        <select className="form-control" style={{marginLeft:'20px',width:'15%',display:'initial'}} onChange={this.props.toggleDate}>
                            <option>Time Period</option>
                            <option selected value="1">Last 7 days</option>
                            <option value="2">Last 30 days</option>
                        </select>
                </div>
            </div>
        );
    }
}
