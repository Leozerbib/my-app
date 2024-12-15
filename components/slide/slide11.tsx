import React from 'react';
import { Card } from '@/components/ui/card';
import { Hospital, Users, Shield, PhoneCall, Heart, Thermometer, Droplets, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

// Sample data for vital signs over time
const vitalSignsData = [
  { time: '08:00', heartRate: 72, temperature: 36.8, hydration: 95, oxygenation: 98 },
  { time: '09:00', heartRate: 75, temperature: 36.9, hydration: 94, oxygenation: 98 },
  { time: '10:00', heartRate: 73, temperature: 37.0, hydration: 93, oxygenation: 97 },
  { time: '11:00', heartRate: 74, temperature: 36.9, hydration: 92, oxygenation: 98 },
  { time: '12:00', heartRate: 76, temperature: 37.1, hydration: 91, oxygenation: 97 },
  { time: '13:00', heartRate: 75, temperature: 37.0, hydration: 90, oxygenation: 98 },
];

const Slide11 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Healthcare Integration</h2>
          
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Left side - Integration features */}
            <div className="space-y-4 h-full flex flex-col flex-grow justify-center">
              <div className="bg-blue-50 p-4 rounded-lg grow">
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

              <div className="bg-green-50 p-4 rounded-lg grow">
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

              <div className="bg-purple-50 p-4 rounded-lg grow">
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
              
              <div className="bg-orange-50 p-4 rounded-lg grow">
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

            {/* Right side - Vital Signs Dashboard */}
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-4 text-center">Real-Time Vital Signs Monitor</h3>
              
              {/* Current Readings */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-500" />
                    <span className="text-lg font-semibold">Heart Rate</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">75 BPM</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-6 h-6 text-orange-500" />
                    <span className="text-lg font-semibold">Temperature</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">37.0°C</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-semibold">Hydration</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">90%</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-semibold">SpO2</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mt-2">98%</p>
                </div>
              </div>

              {/* Trends Chart */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-4">Vital Signs Trend</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={vitalSignsData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="heartRate" stroke="#EF4444" name="Heart Rate" />
                    <Line type="monotone" dataKey="oxygenation" stroke="#10B981" name="SpO2" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide11;