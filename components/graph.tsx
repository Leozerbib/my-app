'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

export const MarketChart = ({ data }: { data: any[] }) => (
  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="#3B82F6" name="Marché Global (Mds €)" />
  </BarChart>
);

export const FinanceChart = ({ data }: { data: any[] }) => (
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
);