import React from 'react';
import { Card } from '@/components/ui/card';
import { Layout, Smartphone, Bell, Glasses } from 'lucide-react';

const Slide8 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-6 h-full">
          <h2 className="text-6xl font-bold text-blue-800">User Interface & Experience</h2>
          
          <div className="grid grid-cols-2 gap-8 h-[80%]">
            {/* Left side - Demo screen */}
            <div className="bg-gray-900 rounded-lg p-4 relative">
              {/* AR Interface Demo */}
              <div className="absolute inset-8 bg-opacity-50 rounded-lg overflow-hidden">
                {/* AR Elements */}
                <div className="relative h-full w-full border-2 border-blue-400 rounded-lg">
                  {/* Heart Rate Monitor */}
                  <div className="absolute top-4 right-4 bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                    <div className="text-blue-400 text-lg">Heart Rate</div>
                    <div className="text-blue-300 text-3xl font-bold">72 BPM</div>
                  </div>
                  
                  {/* Medication Reminder */}
                  <div className="absolute bottom-4 left-4 bg-green-500 bg-opacity-20 p-4 rounded-lg">
                    <div className="text-green-400 text-lg">Next Medication</div>
                    <div className="text-green-300 text-xl">2:00 PM - Aspirin</div>
                  </div>
                  
                  {/* Navigation Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-24 h-24 text-blue-400" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2L4 20l8-3 8 3L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Features */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-start gap-4">
                  <Glasses className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Intuitive AR Display</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Non-intrusive visual overlays</li>
                      <li>• Context-aware information</li>
                      <li>• Clear visual hierarchy</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="flex items-start gap-4">
                  <Layout className="w-12 h-12 text-purple-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Smart Controls</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Voice commands</li>
                      <li>• Gesture recognition</li>
                      <li>• Touch-sensitive frame</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-12 h-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Mobile Integration</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Companion app</li>
                      <li>• Health dashboard</li>
                      <li>• Remote monitoring</li>
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

export default Slide8;