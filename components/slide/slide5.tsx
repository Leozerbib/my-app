import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Shield, Clock, Network, Fullscreen } from 'lucide-react';

const valueData = [
  { month: 'Jan', traditional: 40, smartvision: 80 },
  { month: 'Feb', traditional: 45, smartvision: 85 },
  { month: 'Mar', traditional: 42, smartvision: 88 },
  { month: 'Apr', traditional: 48, smartvision: 90 },
  { month: 'May', traditional: 45, smartvision: 92 },
  { month: 'Jun', traditional: 47, smartvision: 95 },
];

const Slide5 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Value Proposition</h2>
          
          <div className="grid grid-cols-3 gap-8 h-[80%]">
            {/* Left side: Benefits */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-12 h-12 text-blue-600" />
                  <h3 className="text-2xl font-semibold">Enhanced Autonomy</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Independent living support</li>
                  <li>• Fall prevention system</li>
                  <li>• Medication management</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 hover:bg-green-100 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-12 h-12 text-green-600" />
                  <h3 className="text-2xl font-semibold">Real-time Monitoring</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 health tracking</li>
                  <li>• Instant alerts system</li>
                  <li>• Predictive health analysis</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 hover:bg-purple-100 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Network className="w-12 h-12 text-purple-600" />
                  <h3 className="text-2xl font-semibold">Connected Care</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Family connection</li>
                  <li>• Healthcare integration</li>
                  <li>• Emergency response</li>
                </ul>
              </div>
            </div>

            {/* Right side: Value comparison chart */}
            <div className="bg-gray-50 col-span-2 rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-4 text-center">Care Quality Improvement</h3>
              <div className="w-full h-[calc(100%-2rem)]">
                <LineChart
                  width={600}
                  height={300}
                  data={valueData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide5;