import React from 'react';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Users, Building2, Euro, CreditCard } from 'lucide-react';

const revenueDistribution = [
  { name: 'Product Sales B2C', value: 55 },
  { name: 'Healthcare Providers B2B', value: 25 },
  { name: 'Subscriptions', value: 20 }
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6'];

const Slide13 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Business Model</h2>
          
          <div className="grid grid-cols-2 gap-6 h-[80%]">
            {/* Revenue Model */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">B2C Model</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Direct sales to seniors</li>
                      <li>• Product price: €275</li>
                      <li>• Target market: 65+ age group</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-12 h-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">B2B Model</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Healthcare provider partnerships</li>
                      <li>• Bulk purchasing options</li>
                      <li>• Integration services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <CreditCard className="w-12 h-12 text-purple-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Subscription Service</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Monthly fee: €12</li>
                      <li>• Premium features access</li>
                      <li>• 24/7 support services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Distribution Chart */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-center">Revenue Distribution</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-[80%]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {revenueDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide13;