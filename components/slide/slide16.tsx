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

const Slide16 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Conclusion</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Transforming Senior Care"</h3>

          <div className="flex w-full h-[50%] justify-around items-center text-2xl gap-4">
            <div className="p-4 bg-blue-50 h-1/2 w-1/4 rounded-lg">
              <h4 className="font-semibold text-blue-800">The Challenge</h4>
              <p className="mt-2">Demographic aging and growing need for senior autonomy</p>
            </div>

            <div className="p-4 bg-green-50 h-1/2 w-1/4 rounded-lg">
              <h4 className="font-semibold text-green-800">Our Solution</h4>
              <p className="mt-2">SmartVision Care Glasses: innovative technology serving well-being</p>
            </div>

            <div className="p-4 bg-purple-50 h-1/2 w-1/4 rounded-lg">
              <h4 className="font-semibold text-purple-800">The Benefits</h4>
              <p className="mt-2">Enhanced autonomy, increased safety, and optimized care</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-2xl">
            <h4 className="font-semibold text-blue-800">Our Vision</h4>
            <p className="mt-2">Building a more inclusive society where technology enables seniors to live independently and safely while staying connected to their loved ones and healthcare services.</p>
          </div>

          <div className="mt-6 text-center text-2xl">
            <p className="text-3xl font-semibold text-blue-600">Join us in transforming senior care</p>
            <p className="mt-2 text-gray-600">Together, let's create a future where technological innovation improves the lives of our seniors</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide16;