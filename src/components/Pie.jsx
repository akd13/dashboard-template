import React, {Component} from 'react';
import {PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer} from 'recharts';

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
                  
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c",
    "#d62728", "#9467bd", "#8c564b", "#e377c2",
    "#7f7f7f", "#bcbd22", "#17becf"];

export const TwoLevelPieChart = ({data}) => {
	return (
    <ResponsiveContainer width={600} height={360}>
    	<PieChart>
        <Pie data={data} outerRadius={80} label>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Pie>
        <Legend verticalAlign="bottom" height={36}/>
        <Tooltip/>
       </PieChart>
    </ResponsiveContainer>
  );
}