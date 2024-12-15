import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, PiggyBank, ArrowRight } from 'lucide-react';

const financialData = [
  { year: '2024', revenue: 9.98, costs: 12.5, profit: -2.52 },
  { year: '2025', revenue: 11.47, costs: 8.18, profit: 3.29 },
  { year: '2026', revenue: 13.20, costs: 8.95, profit: 4.25 },
  { year: '2027', revenue: 15.19, costs: 9.84, profit: 5.35 },
  { year: '2028', revenue: 17.48, costs: 13.87, profit: 3.61 }
];

const investmentBreakdown = [
  { name: 'R&D', value: 2.5 },
  { name: 'Marketing', value: 1.5 },
  { name: 'Certification', value: 1.0 },
  { name: 'Production', value: 4.5 }
];

const Slide14 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Financial Projections</h2>
          
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Financial Performance Chart */}
            <div className="space-y-4 col-span-2 flex flex-col justify-center flex-grow">
              <div className="bg-blue-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  5-Year Financial Forecast (M€)
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={financialData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#3B82F6" name="Revenue" />
                      <Line type="monotone" dataKey="costs" stroke="#EF4444" name="Costs" />
                      <Line type="monotone" dataKey="profit" stroke="#10B981" name="Profit" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <PiggyBank className="w-8 h-8 text-green-600" />
                  Initial Investment Breakdown (M€)
                </h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={investmentBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Financial Milestones */}
            <div className="space-y-4 flex flex-col flex-grow justify-center">
              <div className="bg-purple-50 p-4 rounded-lg grow">
                <h3 className="text-4xl font-semibold">Financial Milestones</h3>
                <ul className="mt-4 space-y-4 flex items-start flex-col justify-center h-[80%]">
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-2xl">Break-even Point</h4>
                      <p className="text-gray-600  text-xl">Achieved in Year 2 (2025)</p>
                      <p className="text-gray-600  text-xl">Cumulative profit: €777,700</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-2xl">Peak Profitability</h4>
                      <p className="text-gray-600  text-xl">Year 4 (2027)</p>
                      <p className="text-gray-600  text-xl">Annual profit: €5.35M</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ArrowRight className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-2xl">5-Year Projection</h4>
                      <p className="text-gray-600  text-xl">Total revenue: €67.32M</p>
                      <p className="text-gray-600  text-xl">Cumulative profit: €13.98M</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide14;