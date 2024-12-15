'use client';

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ComposedChart } from 'recharts';

export const Slide5Chart = ({ data }: { data: any[] }) => (
  <ResponsiveContainer width="100%" height='100%' className={'absolute'}>
    <LineChart
      data={data}
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="traditional"
        stroke="#9CA3AF"
        name="Traditional Care"
      />
      <Line
        type="monotone"
        dataKey="smartvision"
        stroke="#3B82F6"
        name="SmartVision Care"
      />
    </LineChart>
  </ResponsiveContainer>
);

export const FinanceChart = ({ data }: { data: any[] }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#3B82F6" name="Revenus (M€)" />
      <Line type="monotone" dataKey="costs" stroke="#EF4444" name="Coûts (M€)" />
      <Line type="monotone" dataKey="profit" stroke="#10B981" name="Profit (M€)" />
    </LineChart>
  </ResponsiveContainer>
);