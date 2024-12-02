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

const Slide1 = () => {
  return (
    <div className="h-full w-full">
      {/* Slide 1 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h1 className="text-6xl font-bold text-center text-blue-800">SmartVision Care Glasses</h1>
          <p className="text-4xl text-center text-blue-600">At the service of your vision and your future</p>
          
          <div className="h-[80%] w-full gap-10 flex items-center justify-center mt-8">
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
                <Image src={ju} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Julien Tournier</h3>
              <p className="text-lg">Technical Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={ma} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Matteo Cruz</h3>
              <p className="text-lg">Marketing Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={li} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Lilian Mayet</h3>
              <p className="text-lg">Financial Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={le} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Léo Zerbib</h3>
              <p className="text-lg">Product Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={re} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Rémi Godet</h3>
              <p className="text-lg">Project Manager</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide1;