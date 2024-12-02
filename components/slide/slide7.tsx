import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Eye, Heart, Thermometer, Activity, BatteryCharging } from 'lucide-react';
import hist from '@/public/hist.jpg';
import a from '@/public/img3.jpg';
import b from '@/public/img2.jpg';
import c from '@/public/img1.jpg';
import Image from 'next/image';

const Slide7 = () => {
  return (
    <div className="">
      {/* Slide 7 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Addressing Needs</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"SmartVision Solutions"</h3>

          <div className="flex w-full flex-grow h-[80%] gap-6 text-2xl">
            <div className="space-y-4 h-full w-1/2 flex flex-col">
              <div className="p-4 bg-red-50 h-1/2 rounded-lg flex flex-col justify-center">
                <h4 className="font-semibold">Current Challenges</h4>
                <ul className="list-disc ml-4">
                  <li>Loss of autonomy</li>
                  <li>Risk of falls</li>
                  <li>Complex medical monitoring</li>
                  <li>Social isolation</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 h-1/2 rounded-lg flex flex-col justify-center">
                <h4 className="font-semibold">Functional Benefits</h4>
                <ul className="list-disc ml-4">
                  <li>Real-time monitoring</li>
                  <li>Smart alerts</li>
                  <li>Healthcare provider interface</li>
                  <li>Simplified communication</li>
                </ul>
              </div>
            </div>

            <div className="p-4 h-full w-1/2 bg-blue-50 rounded-lg flex flex-col justify-center">
              <h4 className="font-semibold">Environmental Impact</h4>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <BatteryCharging className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Sustainable Design</p>
                    <p>Recyclable materials and long-lasting battery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Resource Optimization</p>
                    <p>Reduction in medical travel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide7;