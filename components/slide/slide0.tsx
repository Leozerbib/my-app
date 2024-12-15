'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Activity, Heart } from 'lucide-react';

const IntroSlide = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full flex flex-col justify-center flex-grow">
          <div className="text-center space-y-4 mb-12 grow">
            <h2 className="text-6xl font-bold text-blue-800">SmartVision Care Glasses</h2>
            <p className="text-2xl text-gray-800  text-2xl">Transforming Elderly Care Through Innovation</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 h-full">
            {/* Left Side - The Challenge */}
            <div className="space-y-6 flex flex-col justify-center flex-grow">
              <h3 className="text-3xl font-semibold text-gray-800">The Challenge</h3>
              
              <div className="bg-red-50 p-6 rounded-lg grow">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-8 h-8 text-red-600" />
                  <span className="text-xl font-semibold">Growing Aging Population</span>
                </div>
                <p className="text-gray-800  text-2xl">By 2050, nearly 22% of the global population will be over 60 years old, creating unprecedented challenges for healthcare systems.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg grow">
                <ul className="space-y-4 text-gray-800  text-2xl">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">•</span>
                    Limited healthcare resources
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">•</span>
                    Increasing care demands
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-orange-600">•</span>
                    Need for continuous monitoring
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Side - Our Solution */}
            <div className="space-y-6 flex flex-col justify-center flex-grow">
              <h3 className="text-3xl font-semibold text-gray-800">Our Solution</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg grow">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                  <span className="text-xl font-semibold">Smart Healthcare Integration</span>
                </div>
                <p className="text-gray-800  text-2xl">Next-generation smart glasses designed specifically for senior care and monitoring, combining AI, AR, and biometric sensors.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg grow">
                <ul className="space-y-4 text-gray-800  text-2xl">
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    Real-time vital signs monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    Predictive health analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    Seamless medical integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IntroSlide;