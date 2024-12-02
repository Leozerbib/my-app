import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Eye, Heart, Thermometer, Activity, BatteryCharging } from 'lucide-react';
import hist from '@/public/hist.jpg';
import a from '@/public/img3.jpg';
import b from '@/public/img2.jpg';
import c from '@/public/img1.jpg';
import Image from 'next/image';

const Slide5 = () => {
  return (
    <div className="">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">The Evolution of Smart Glasses</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Technological Motivation"</h3>
          
          <div className="flex flex-wrap h-[80%] text-2xl">
            <div className="p-4 w-1/2 bg-blue-50 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Technological Advances
              </h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Embedded Artificial Intelligence</li>
                <li>Intuitive Augmented Reality</li>
                <li>IoT and Advanced Connectivity</li>
              </ul>
            </div>
            <div className='w-1/2 h-1/3 p-2'>
                <Image src={a} alt="Tech Image 1" className="h-full object-contain rounded-md" />
            </div>

            <div className="p-4 w-1/2 bg-green-50 rounded-lg">
              <h4 className="font-semibold">Political Support</h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>National senior-tech plans</li>
                <li>Innovation grants</li>
                <li>Digital health reforms</li>
              </ul>
            </div>

            <div className='w-1/2 h-1/3 p-2'>
                <Image src={b} alt="Tech Image 2" className='h-full object-contain rounded-md' />
            </div>

            <div className="p-4 w-1/2 bg-purple-50 rounded-lg">
              <h4 className="font-semibold">Sector Growth</h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Rapidly expanding market</li>
                <li>Growing demand</li>
                <li>Continuous innovations</li>
              </ul>
            </div>

            <div className='w-1/2 h-1/3 p-2'>
                <Image src={c} alt="Tech Image 3" className="h-full w-full object-contain rounded-md" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide5;