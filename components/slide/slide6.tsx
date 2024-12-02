import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Eye, Heart, Thermometer, Activity, BatteryCharging } from 'lucide-react';
import hist from '@/public/hist.jpg';
import a from '@/public/img3.jpg';
import b from '@/public/img2.jpg';
import c from '@/public/img1.jpg';
import Image from 'next/image';

const Slide6 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">The History of Glasses</h2>          
          <div>
            <Image src={hist} alt="History timeline" className="rounded-full" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide6;