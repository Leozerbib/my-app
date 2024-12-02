import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Check, Heart, Hospital, Euro, Users, Leaf, Brain } from 'lucide-react';
import a from '@/public/img3.jpg';
import b from '@/public/img2.jpg';
import c from '@/public/img1.jpg';

const Slide4 = () => {
  return (
    <div className="s">
       <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">From Classic to Connected</h2>
          
          <div className="grid grid-cols-2 gap-8 h-[60%] text-2xl">
            <div className="p-4 bg-gray-50 rounded-lg flex h-full justify-center flex-col">
              <h3 className="font-semibold text-4xl mb-4">Classic Solutions</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-gray-600" />
                  <span>Canes and walkers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-gray-600" />
                  <span>Simple alert buttons</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-gray-600" />
                  <span>Basic corrective glasses</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg flex h-full justify-center flex-col">
              <h3 className="font-semibold text-4xl mb-4">Smart Solutions</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-blue-600" />
                  <span>Integrated biometric sensors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-blue-600" />
                  <span>Predictive and preventive AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-blue-600" />
                  <span>Assistive augmented reality</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 h-[25%] bg-yellow-50">
            <h3 className="font-semibold text-4xl mb-2">Advantages of Smart Solutions</h3>
            <ul className="h-[80%] gap-4 flex justify-around items-center rounded-lg">
              <li className="flex items-start gap-2">
                <Check className="w-12 h-12 mb-3 text-green-600" />
                <span>Continuous and preventive monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-12 h-12 mb-3 text-green-600" />
                <span>Advanced personalization</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-12 h-12 mb-3 text-green-600" />
                <span>Healthcare ecosystem integration</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide4;