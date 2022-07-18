import React from 'react';
import {PieChart, Pie, Cell, Legend} from "recharts";

interface incomeTabProps {
    incomeValue: number
}

const IncomeTab = ({incomeValue}: incomeTabProps) => {

    const data = [
        {name: 'Income', value: incomeValue},
    ];

    const COLORS = ['rgb(34 197 94)'];

    return (
        <div className={'flex flex-col w-1/5 h-[25rem] justify-center items-center bg-[#F5F5F5] rounded-lg income-tab border-4'}>
            <h2 className={'font-mono m-2 text-2xl text-green-500'}>Income</h2>
            <h1 className={'font-mono m-2 text-4xl text-green-500'}>{`$${incomeValue}`}</h1>
            <div className={'font-mono mt-2 h-full flex justify-center items-center'}>
                <PieChart width={200} height={200} >
                    <Legend />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    )
}


export default IncomeTab;