import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} from 'recharts';

const colors = ["#1f77b4", "#ff7f0e", "#2ca02c",
    "#d62728", "#9467bd", "#8c564b", "#e377c2",
    "#7f7f7f", "#bcbd22", "#17becf"];

export const Graph = ({data}) => {

    return (
        <div className='box'>
            <BarChart width={450} height={300} data={data}
                      margin={{top: 30, right: 40, bottom: 5}}>
                <XAxis dataKey="Day"/>
                <YAxis />
                <CartesianGrid strokeDasharray="1 1"/>
                <Bar dataKey="Seats" fill="#1DC7EA"/>
                <Tooltip/>
            </BarChart>
        </div>
    );
}