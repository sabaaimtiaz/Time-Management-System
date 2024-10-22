import React from 'react';
import { BarChart, Bar, Rectangle, XAxis ,ResponsiveContainer } from 'recharts';

export const ReportChart = () => {

    
const data = [
  {
    name: 'Brampton',
    hours: 2400,
    // amt: 2400,
  },
  {
    name: 'Cambridge',

    hours: 1398,
    // amt: 2210,
  },
  {
    name: 'Etobicoke',
    hours: 5010,
    // amt: 2290,
  },
  {
    name: 'Hamilton',
    hours: 3908,
    // amt: 2000,
  },
  {
    name: 'Mississauga',
    hours: 4800,
    // amt: 2181,
  },
  {
    name: 'Malton',
    hours: 3800,
    // amt: 2500,
  },
 
];
  return (
    
    
        <ResponsiveContainer width="100%" height="100%" >
            
          <BarChart
            
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey="hours" fill="#C78C06" activeBar={<Rectangle fill="lightyellow" stroke="yellow" />} 
            barSize={35} label={{ position: 'top', fill: 'black' }}  /> 
            
          </BarChart>
          
        </ResponsiveContainer>
  )
}
export default ReportChart;
