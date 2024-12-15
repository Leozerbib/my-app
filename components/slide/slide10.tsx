import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, PieChart, Timer, AlertTriangle } from 'lucide-react';
import { LineChart } from 'recharts';
import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const healthData = [
  { time: '8:00', heart: 72, oxygen: 98, temp: 36.8 },
  { time: '10:00', heart: 75, oxygen: 97, temp: 36.9 },
  { time: '12:00', heart: 78, oxygen: 98, temp: 37.0 },
  { time: '14:00', heart: 74, oxygen: 98, temp: 36.9 },
  { time: '16:00', heart: 76, oxygen: 97, temp: 36.8 },
  { time: '18:00', heart: 73, oxygen: 98, temp: 36.7 }
];

const Slide10 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Daily Use Case</h2>
          
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Scenario Timeline */}
            <div className="space-y-4 flex flex-col justify-center flex-grow">
              <div className="bg-blue-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Activity className="w-8 h-8 text-blue-600" />
                  Morning Health Check
                </h3>
                <p className="mt-2 text-gray-600">
                  Automated vitals monitoring during breakfast:
                  • Heart rate: 72 bpm
                  • Temperature: 36.8°C
                  • Blood oxygen: 98%
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Timer className="w-8 h-8 text-purple-600" />
                  Medication Reminder
                </h3>
                <p className="mt-2 text-gray-600">
                  10:00 AM - Blood pressure medication
                  12:00 PM - Diabetes medication
                  6:00 PM - Evening supplements
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <PieChart className="w-8 h-8 text-green-600" />
                  Activity Monitoring
                </h3>
                <p className="mt-2 text-gray-600">
                  • Morning walk detection
                  • Rest period alerts
                  • Movement analysis
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg grow">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                  Emergency Features
                </h3>
                <p className="mt-2 text-gray-600">
                  • Fall detection
                  • Abnormal vitals alert
                  • One-touch emergency call
                </p>
              </div>
            </div>

            {/* Charts */}
            <div className="space-y-4 flex flex-col justify-center">
              <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">Daily Health Metrics</h3>
                <ResponsiveContainer width="100%" height={500}>
                  <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="heart" stroke="#3B82F6" name="Heart Rate" />
                    <Line type="monotone" dataKey="oxygen" stroke="#10B981" name="Oxygen %" />
                    <Line type="monotone" dataKey="temp" stroke="#F97316" name="Temperature" />
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

export default Slide10;