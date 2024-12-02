import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check, LightbulbIcon, AlertTriangle, Hourglass } from 'lucide-react';
import logo from '@/public/logo.jpg';

const Slide3 = () => {
  return (
    <div className="">
      {/* Slide 3 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Why Smart Glasses?</h2>
          <div className='h-[80%] w-full flex'>
            <div className="h-full w-1/2">
                <div className="absolute w-1 bg-blue-200 h-[80%] left-4"></div>
                <div className="space-y-6 ml-12 flex h-full flex-col w-full">
                <div className="relative h-1/3 w-full">
                    <div className="absolute w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-12 h-12 text-white" />
                    </div>
                    <div className='flex-col flex text-3xl pt-8 justify-center w-full h-full'>
                    <h3 className="font-semibold">1950-1980</h3>
                    <p>First electronic hearing aids</p>
                    <p>Beginning of technological assistance for seniors</p>
                    </div>
                </div>
                
                <div className="relative h-1/3 w-full">
                    <div className="absolute w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className='flex-col flex text-3xl pt-8 justify-center w-full h-full'>
                    <h3 className="font-semibold">1980-2010</h3>
                    <p>Emergence of remote monitoring devices</p>
                    <p>Development of alert systems</p>
                    </div>
                </div>
                
                <div className="relative h-1/3 w-full">
                    <div className="absolute w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div className='flex-col flex text-3xl pt-8 justify-center w-full h-full'>
                    <h3 className="font-semibold">2010-2023</h3>
                    <p>Connected objects revolution</p>
                    <p>Artificial intelligence and augmented reality</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="h-full flex justify-center items-center w-1/2 relative">
                <Image src={logo} alt="Logo" className="rounded-full" />
            </div>
            </div>
          </div>
      </Card>
    </div>
  );
};

export default Slide3;