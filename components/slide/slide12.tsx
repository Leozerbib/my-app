import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const marketGrowth = [
  { year: '2023', value: 11.1 },
  { year: '2024', value: 14.5 },
  { year: '2025', value: 18.9 },
  { year: '2026', value: 22.3 },
  { year: '2027', value: 26.8 }
];

const demographicData = [
  { age: '60-65', current: 15, potential: 25 },
  { age: '65-70', current: 12, potential: 30 },
  { age: '70-75', current: 8, potential: 20 },
  { age: '75+', current: 5, potential: 15 }
];

const Slide12 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Market Analysis</h2>
          
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Market Growth Chart */}
            <div className="space-y-4 flex flex-col justify-center flex-grow">
              <div className="bg-blue-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  Market Growth Projection
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={marketGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" name="Market Size (B€)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Demographics Chart */}
              <div className="bg-purple-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                  Target Demographics
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={demographicData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" fill="#8B5CF6" name="Current Users %" />
                    <Bar dataKey="potential" fill="#10B981" name="Potential Users %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Market Analysis Details */}
            <div className="space-y-4 flex flex-col flex-grow">
              <div className="bg-green-50 p-4 rounded-lg grow">
                <div className="flex items-start gap-4">
                  <Target className="w-12 h-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Market Opportunity</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• 25% annual growth rate</li>
                      <li>• €26.8B market by 2027</li>
                      <li>• 700M potential users globally</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg grow">
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-orange-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Competitive Advantage</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Specialized senior focus</li>
                      <li>• Integrated healthcare ecosystem</li>
                      <li>• Advanced AI capabilities</li>
                      <li>• Medical-grade monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold mb-2">Competition Landscape</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>SmartVision Care</span>
                    <div className="w-48 h-4 bg-blue-100 rounded">
                      <div className="w-40 h-full bg-blue-600 rounded" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Apple Watch</span>
                    <div className="w-48 h-4 bg-blue-100 rounded">
                      <div className="w-32 h-full bg-blue-400 rounded" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Google Glass</span>
                    <div className="w-48 h-4 bg-blue-100 rounded">
                      <div className="w-24 h-full bg-blue-300 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide12;