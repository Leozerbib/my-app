import React from 'react';
import { Card } from '@/components/ui/card';
import { Hospital, Users, Shield, PhoneCall } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const careData = [
  { name: 'Remote Monitoring', value: 35 },
  { name: 'Family Connection', value: 25 },
  { name: 'Healthcare Integration', value: 25 },
  { name: 'Preventive Alerts', value: 15 }
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F97316'];

const Slide11 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Healthcare Integration</h2>
          
          <div className="grid grid-cols-2 gap-6 h-[80%]">
            {/* Left side - Integration features */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Hospital className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Healthcare Provider Access</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Real-time vitals monitoring</li>
                      <li>• Medical history access</li>
                      <li>• Treatment plan updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Preventive Care</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Early warning system</li>
                      <li>• Trend analysis</li>
                      <li>• Automated health recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-purple-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Family Connection</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Shared health dashboard</li>
                      <li>• Emergency notifications</li>
                      <li>• Care coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <PhoneCall className="w-12 h-12 text-orange-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Remote Support</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• 24/7 monitoring center</li>
                      <li>• Video consultations</li>
                      <li>• Emergency response</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Integration distribution chart */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Care Integration Distribution</h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={careData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {careData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide11;