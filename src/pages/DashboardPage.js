// src/pages/Dashboard.jsx
import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Consumed', value: 35 },
  { name: 'Remaining', value: 65 },
];

const COLORS = ['#f1c40f', '#3498db'];

const marginData = [
  { date: '12th Oct', margin: 65 },
  { date: '13th Oct', margin: 70 },
  { date: '14th Oct', margin: 80 },
  { date: '15th Oct', margin: 75 },
  { date: '16th Oct', margin: 90 },
  { date: '17th Oct', margin: 78 },
];

const Dashboard = () => (
  <div className="dashboard">
    <h1>Analytics Dashboard</h1>

    <div className="cards-container">
      <div className="card">
        <h3>Battery</h3>
        <PieChart width={200} height={200}>
          <Pie data={pieData} dataKey="value" outerRadius={80} label>
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <p style={{ textAlign: 'center' }}>65%</p>
      </div>

      <div className="card">
        <h3>Margin %</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={marginData}>
            <XAxis dataKey="date" />
            <YAxis domain={[60, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="margin" stroke="#00FFAA" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Dashboard;
