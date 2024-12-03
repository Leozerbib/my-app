import React from 'react';
import { Card } from '@/components/ui/card';

const Slide10 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Opportunity Analysis</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Market Entry Strategy"</h3>

          <div className="flex h-[80%] w-full flex-wrap text-2xl">
            <div className="p-4 bg-blue-100 w-1/2 rounded-lg">
              <h4 className="font-semibold text-blue-800">Strengths</h4>
              <ul className="list-disc ml-4">
                <li>Comprehensive vital sign monitoring</li>
                <li>Intuitive augmented reality interface</li>
                <li>Hospital system integration</li>
              </ul>
            </div>
            <div className="p-4 bg-red-100 w-1/2 rounded-lg">
              <h4 className="font-semibold text-red-800">Weaknesses</h4>
              <ul className="list-disc ml-4">
                <li>High initial costs</li>
                <li>Dependence on medical certifications</li>
                <li>New brand in the market</li>
              </ul>
            </div>
            <div className="p-4 bg-green-100 w-1/2 rounded-lg">
              <h4 className="font-semibold text-green-800">Opportunities</h4>
              <ul className="list-disc ml-4">
                <li>Rapidly growing market</li>
                <li>Aging population</li>
                <li>Demand for connected solutions</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-100 w-1/2 rounded-lg">
              <h4 className="font-semibold text-yellow-800">Threats</h4>
              <ul className="list-disc ml-4">
                <li>Competition from tech giants</li>
                <li>Senior resistance to adoption</li>
                <li>Regulatory changes</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide10;