import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Users, Sparkles, BarChart3 } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const impactData = [
  { subject: 'Healthcare Innovation', value: 90 },
  { subject: 'Social Inclusion', value: 85 },
  { subject: 'Quality of Life', value: 95 },
  { subject: 'Cost Efficiency', value: 80 },
  { subject: 'Accessibility', value: 85 },
  { subject: 'Sustainability', value: 75 }
];

const Slide16 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Vision & Impact</h2>
          
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Vision Statements */}
            <div className="space-y-4 flex flex-col justify-center flex-grow">
              <div className="bg-blue-50 p-6 rounded-lg grow">
                <div className="flex items-start gap-4">
                  <Heart className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Healthcare Innovation</h3>
                    <p className="mt-2 text-gray-600">
                      Revolutionizing elderly care through cutting-edge technology and proactive health monitoring
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg grow">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-purple-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Social Inclusion</h3>
                    <p className="mt-2 text-gray-600">
                      Creating a more connected and supportive environment for seniors to maintain independence
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg grow">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-12 h-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Quality of Life</h3>
                    <p className="mt-2 text-gray-600">
                      Enhancing daily living through seamless health monitoring and assistance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg grow">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-12 h-12 text-orange-600" />
                  <div>
                    <h3 className="text-2xl font-semibold">Future of Senior Care</h3>
                    <p className="mt-2 text-gray-600">
                      Building a sustainable and scalable solution for the growing aging population
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Visualization */}
            <div className="space-y-4 flex flex-col flex-grow justify-center">
              <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold text-center mb-4">Impact Assessment</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={impactData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="subject" stroke="#4b5563" />
                    <Radar
                      name="Impact Score"
                      dataKey="value"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide16;