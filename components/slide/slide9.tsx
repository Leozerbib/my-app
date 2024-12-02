import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check, LightbulbIcon, AlertTriangle, Hourglass } from 'lucide-react';
import ju from '@/public/julien.jpg';
import ma from '@/public/matteo.jpg';
import li from '@/public/lilian.jpg';
import le from '@/public/leo.jpg';
import re from '@/public/remi.jpg';
import logo from '@/public/logo.jpg';

const Slide9 = () => {
  return (
    <div className="">
      <Card className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Usage Statistics</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"SmartVision in Action"</h3>
          
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-blue-50 rounded-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="font-semibold text-3xl text-blue-800">Battery Life</h4>
              <p className="text-7xl font-bold text-blue-600 my-4">12h</p>
              <p className="text-xl text-blue-700">of continuous use</p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="font-semibold text-3xl text-green-800">Reliability</h4>
              <p className="text-7xl font-bold text-green-600 my-4">99%</p>
              <p className="text-xl text-green-700">sensor accuracy</p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="font-semibold text-3xl text-purple-800">Response Time</h4>
              <p className="text-7xl font-bold text-purple-600 my-4">0.15s</p>
              <p className="text-xl text-purple-700">average response time</p>
            </div>
            
            <div className="p-6 bg-orange-50 rounded-lg text-center transform hover:scale-105 transition-transform">
              <h4 className="font-semibold text-3xl text-orange-800">Range</h4>
              <p className="text-7xl font-bold text-orange-600 my-4">100m</p>
              <p className="text-xl text-orange-700">stable connection</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide9;