import React from 'react';
import { Card } from '@/components/ui/card';
import { Glasses, Brain, Eye, Workflow } from 'lucide-react';

const Slide4 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Our Solution</h2>
          <div className="grid grid-cols-2 gap-8 h-[80%]">
            {/* Left side: Main product visualization */}
            <div className="bg-blue-50 rounded-lg p-6 flex flex-col justify-center items-center">
              {/* Here you should add an SVG or image of the smart glasses */}
              <div className="w-full h-64 bg-white rounded-lg mb-4 flex items-center justify-center">
                {/* TODO: Add smart glasses illustration/SVG here */}
                <Glasses className="w-48 h-48 text-blue-600" />
              </div>
              <h3 className="text-3xl font-semibold text-blue-800 mb-2">SmartVision Care Glasses</h3>
              <p className="text-lg text-center text-gray-600">
                Next-generation smart glasses designed specifically for senior care and monitoring
              </p>
            </div>

            {/* Right side: Key features */}
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition-colors">
                <div className="flex items-start gap-4">
                  <Brain className="w-12 h-12 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">AI-Powered Monitoring</h3>
                    <p className="text-gray-600">Real-time health tracking and predictive analysis for proactive care</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors">
                <div className="flex items-start gap-4">
                  <Eye className="w-12 h-12 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Augmented Reality Interface</h3>
                    <p className="text-gray-600">Intuitive visual assistance and medication reminders</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition-colors">
                <div className="flex items-start gap-4">
                  <Workflow className="w-12 h-12 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Healthcare Integration</h3>
                    <p className="text-gray-600">Seamless connection with medical systems and caregivers</p>
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

export default Slide4;