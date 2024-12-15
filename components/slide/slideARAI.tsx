'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Eye, Activity, AlertCircle } from 'lucide-react';

const AIARSlide = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-blue-800">AI & AR Capabilities</h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* Left side - AI Features */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-6">Artificial Intelligence</h3>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <div>
                    <h4 className="text-xl font-semibold">Predictive Analysis</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Pattern recognition in vital signs</li>
                      <li>• Early anomaly detection</li>
                      <li>• Personalized health insights</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="text-xl font-semibold">Behavioral Learning</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Daily routine analysis</li>
                      <li>• Activity pattern monitoring</li>
                      <li>• Adaptive health recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  <div>
                    <h4 className="text-xl font-semibold">Smart Alerts</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Fall prediction system</li>
                      <li>• Emergency situation detection</li>
                      <li>• Automated emergency response</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - AR Features */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-6">Augmented Reality</h3>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="text-xl font-semibold">Visual Interface</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Non-intrusive display</li>
                      <li>• Transparent overlay system</li>
                      <li>• Adjustable brightness</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 text-orange-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Real-time Information</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Vital signs display</li>
                      <li>• Medication reminders</li>
                      <li>• Navigation assistance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 text-teal-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Smart Visualization</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Context-aware displays</li>
                      <li>• Environmental adaptation</li>
                      <li>• Gesture recognition</li>
                    </ul>
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

export default AIARSlide;