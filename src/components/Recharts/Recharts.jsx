import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const Recharts = ({ ratings }) => {

    return (
        <div className='w-full h-[400px]'>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    layout="vertical"
                    data={ratings}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="count" fill="#FF881160" stroke="#FF8811" />
                    <Bar dataKey="count" barSize={20} fill="#FF8811" />
                    <Line dataKey="count" stroke="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;