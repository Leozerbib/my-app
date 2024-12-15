'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Bell, Clock, Navigation2 } from 'lucide-react';

const AIARDemoSlide = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-blue-800">Live Demonstration</h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* Left side - AI Demo */}
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold mb-6">AI in Action</h3>
              
              {/* AI Demo Interface */}
              <div className="bg-slate-900 p-6 rounded-xl text-white">
                <div className="space-y-6">
                  <div className="border-b border-slate-700 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-sm">Heart Rate Analysis</span>
                      </div>
                      <span className="text-green-400">Normal Pattern</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Pattern identified: Regular daily activity
                    </p>
                  </div>

                  <div className="border-b border-slate-700 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">Predictive Alert</span>
                      </div>
                      <span className="text-yellow-400">Warning</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Potential fall risk detected - Recommending rest
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">Behavioral Pattern</span>
                      </div>
                      <span className="text-blue-400">Learning</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Daily routine updated: Morning walk detected
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - AR Demo */}
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold mb-6">AR Display</h3>
              
              {/* AR Demo Interface */}
              <div className="relative bg-slate-900 p-6 rounded-xl aspect-video overflow-hidden">
                {/* Simulated AR View */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20" />
                
                {/* AR Elements */}
                <div className="relative h-full">
                  {/* Navigation Arrow */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-blue-400">
                    <Navigation2 className="w-8 h-8" />
                    <p className="text-sm mt-1">Turn right in 10m</p>
                  </div>

                  {/* Vital Signs Display */}
                  <div className="absolute top-4 right-4 bg-black/40 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-white text-sm">75 BPM</span>
                    </div>
                  </div>

                  {/* Medication Reminder */}
                  <div className="absolute bottom-4 left-4 bg-black/40 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm">
                        Medication due in 15 min
                      </span>
                    </div>
                  </div>

                  {/* Environmental Alert */}
                  <div className="absolute top-4 left-4 bg-black/40 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">
                        Safe path detected
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AR Feature List */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold">Real-time Navigation</p>
                  <p className="text-xs text-gray-600">Safe path guidance</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold">Health Monitoring</p>
                  <p className="text-xs text-gray-600">Continuous vital tracking</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold">Medication Alerts</p>
                  <p className="text-xs text-gray-600">Timely reminders</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold">Environment Scan</p>
                  <p className="text-xs text-gray-600">Hazard detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIARDemoSlide;