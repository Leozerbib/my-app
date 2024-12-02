import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check, LightbulbIcon, AlertTriangle, Hourglass, Heart, Euro, Hospital, Leaf } from 'lucide-react';
import ju from '@/public/julien.jpg';
import ma from '@/public/matteo.jpg';
import li from '@/public/lilian.jpg';
import le from '@/public/leo.jpg';
import re from '@/public/remi.jpg';
import logo from '@/public/logo.jpg';

const Slide15 = () => {
  return (
    <div className="">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 flex flex-col h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Social Impact</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Improving Lives"</h3>
          
          <div className="flex align-middle h-full w-full gap-6 text-2xl">
            <div className="w-1/2 h-full space-y-4">
              <div className="h-1/2 w-full flex align-middle justify-center items-center space-x-3">
                <Heart className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">User Benefits</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Enhanced autonomy</li>
                    <li>Increased safety</li>
                    <li>Better quality of life</li>
                  </ul>
                </div>
              </div>

              <div className="h-1/2 w-full items-center justify-center flex space-x-3">
                <Hospital className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Healthcare System Impact</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Reduced hospitalizations</li>
                    <li>Resource optimization</li>
                    <li>Improved preventive monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 h-full w-1/2">
              <div className="h-1/2 w-full justify-center flex items-center space-x-3">
                <Euro className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Economic Impact</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Reduced healthcare costs</li>
                    <li>Care efficiency</li>
                    <li>Sustainable business model</li>
                  </ul>
                </div>
              </div>

              <div className="h-1/2 w-full justify-center flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Sustainable Development</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Reduced medical waste</li>
                    <li>Resource optimization</li>
                    <li>Controlled environmental impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide15;