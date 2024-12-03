import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check, LightbulbIcon, AlertTriangle, Hourglass, ChevronDown } from 'lucide-react';
import ju from '@/public/julien.jpg';
import ma from '@/public/matteo.jpg';
import li from '@/public/lilian.jpg';
import le from '@/public/leo.jpg';
import re from '@/public/remi.jpg';
import logo from '@/public/logo.jpg';

const Slide13 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Development Plan</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Roadmap to Launch"</h3>
          
          <div className="w-full pl-96 flex pt-8 flex-col h-full gap-4">
            <div className="relative hover:bg-blue-100 border-l-4 border-blue-500 pl-4">
              <h4 className="bg-blue-500/10 p-4 h-full w-32 rounded-lg absolute -ml-40 font-semibold">Year 1</h4>
              <ul className="text-4xl list-disc ml-4 space-y-2">
                <li>Initial R&D and prototype development</li>
                <li>Biometric sensor testing</li>
                <li>CE/FDA medical certification</li>
              </ul>
              <ChevronDown className="w-9 h-9 text-blue-500 asbolute -ml-9 -mb-4" />
            </div>
            
            <div className="relative border-l-4 hover:bg-green-100 border-green-500 pl-4">
              <h4 className="bg-green-500/10 p-4 h-full w-32 rounded-lg absolute -ml-40 font-semibold">Year 2</h4>
              <ul className="text-4xl list-disc ml-4 space-y-2">
                <li>Production of first batches</li>
                <li>Launch of marketing campaigns</li>
                <li>Deployment in initial partner hospitals</li>
              </ul>
              <ChevronDown className="w-9 h-9 text-green-500 asbolute -ml-9 -mb-4" />
            </div>
            
            <div className="relative border-l-4 hover:bg-purple-100 border-purple-500 pl-4">
              <h4 className="bg-purple-500/10 p-4 h-full w-32 rounded-lg absolute -ml-40 font-semibold">Years 3-5</h4>
              <ul className="text-4xl list-disc ml-4 space-y-2">
                <li>International expansion</li>
                <li>Development of new features</li>
                <li>Production cost optimization</li>
              </ul>
              <ChevronDown className="w-9 h-9 text-purple-500 asbolute -ml-9 -mb-4" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide13;