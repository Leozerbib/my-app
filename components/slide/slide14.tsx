import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check, LightbulbIcon, AlertTriangle, Hourglass } from 'lucide-react';

const Slide14 = () => {
  return (
    <div className="">
      <Card className="p-6 bg-white shadow-lg">
        <div className="h-full w-full flex flex-col relative space-y-4">
          <h2 className="text-6xl font-bold text-blue-800">Risk Analysis</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Anticipating and Mitigating Challenges"</h3>
          
          <div className="flex h-full w-full gap-4 align-middle">
            <div className="p-4 bg-red-50 rounded-lg w-full flex flex-col align-middle h-full justify-center">
              <h4 className="font-semibold text-4xl text-red-800">Major Risks</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>Slow adoption by seniors</li>
                <li>High initial investments</li>
                <li>Increased competition</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg w-full flex flex-col align-middle h-full justify-center">
              <h4 className="text-4xl font-semibold text-green-800">Solutions</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>Targeted local campaigns</li>
                <li>Diversification of funding sources</li>
                <li>Focus on quality and customer support</li>
                <li>Collaboration with regulatory experts</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide14;