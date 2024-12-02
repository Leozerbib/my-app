import React from 'react';
import { Card } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import { Heart, Brain } from 'lucide-react';

const Slide8 = () => {
  return (
    <div className="">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Technical Specifications</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"SmartVision Operation"</h3>

          <div className="flex w-full h-[40%] flex-grow gap-4 items-center text-2xl">
            <div className="bg-blue-50 w-1/3 rounded-lg p-6">
              <h4 className="font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Biometric Sensors
              </h4>
              <ul className="list-disc ml-4">
                <li>Heart rate</li>
                <li>Body temperature</li>
                <li>Oxygen saturation</li>
                <li>Fall detection</li>
              </ul>
            </div>

            <div className="p-6 bg-purple-50 w-1/3 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" />
                AI and AR
              </h4>
              <ul className="list-disc ml-4">
                <li>Predictive analysis</li>
                <li>Intuitive interface</li>
                <li>Smart alerts</li>
                <li>Visual assistance</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 w-1/3 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-500" />
                Mobile Application
              </h4>
              <ul className="list-disc ml-4">
                <li>Real-time monitoring</li>
                <li>Medical history</li>
                <li>Healthcare communication</li>
                <li>Alert management</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-8 bg-gray-50 rounded-lg text-2xl">
            <h4 className="font-semibold">System Integration</h4>
            <p className="mt-2">
              All functionalities are interconnected through a secure cloud platform, 
              enabling real-time synchronization between the glasses, mobile application, 
              and hospital systems.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide8;