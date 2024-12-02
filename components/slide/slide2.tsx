import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check, LightbulbIcon, AlertTriangle, Hourglass } from 'lucide-react';
import ju  from '@/public/julien.jpg';
import ma  from '@/public/matteo.jpg';
import li  from '@/public/lilian.jpg';
import le  from '@/public/leo.jpg';
import re  from '@/public/remi.jpg';
import logo from '@/public/logo.jpg';

const Slide2 = () => {
  return (
    <div className="h-full w-full">
      {/* Slide 2 */}
      <Card className="p-6 bg-white shadow-lg">
      <div className="space-y-4 h-full">
        <h2 className="text-6xl font-bold text-blue-800">The Problem</h2>
        
        <div className="grid grid-cols-3 gap-6 mt-8">
          {/* Current State */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <Hourglass className="w-16 h-16 text-gray-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Current State</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Global population aging is accelerating. By 2050, nearly 22% of the population will be over 60, creating unprecedented challenges for our healthcare systems.
            </p>
          </div>

          {/* Challenges */}
          <div className="bg-red-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
            <h3 className="text-3xl font-semibold text-red-800 mb-4 text-center">Challenges</h3>
            <p className="text-xl text-red-700 leading-relaxed">
              How can technological advances meet the health and safety needs of seniors while reducing pressure on healthcare systems?
            </p>
          </div>

          {/* Our Solution */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <LightbulbIcon className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-3xl font-semibold text-green-800 mb-4 text-center">Our Solution</h3>
            <p className="text-xl text-green-700 leading-relaxed">
              SmartVision Care Glasses combine biometric sensors, artificial intelligence, and augmented reality to improve seniors' autonomy and ensure proactive real-time monitoring.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <p className="text-2xl text-blue-800 text-center italic">
            "Our mission is to transform the challenges of aging into opportunities for innovation for a more inclusive society."
          </p>
        </div>
      </div>
    </Card>
    </div>
  );
};

export default Slide2;