'use client';

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ComposedChart } from 'recharts';

export const MarketChart = ({ data }: { data: any[] }) => (
  <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" barSize={80} fill="#3B82F6" />
      <Line type="monotone" dataKey="value" stroke="#ff7300" />
    </ComposedChart>
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