import React from 'react';
import { Card } from '@/components/ui/card';
import dynamic from 'next/dynamic';
const MarketChart = dynamic(() => import('../graph').then(mod => mod.MarketChart), {
    ssr: false,
    loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
  });

const Slide11 = () => {
    const marketData = [
        { year: '2023', value: 11.1, name: 'Market Size (Bn €)' },
        { year: '2024', value: 13.9 },
        { year: '2025', value: 17.4 },
        { year: '2026', value: 21.7 },
        { year: '2027', value: 26.8 }
      ];

  return (
    <div className="h-full w-full">
      <Card className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Key Figures</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"By the Numbers"</h3>
          
          <div className="w-full h-[50%]">
            <MarketChart data={marketData} />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-4xl">Unit Cost</h4>
              <p className="text-6xl font-bold text-blue-600">€150</p>
              <p className="text-2xl">Sale price: €275</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-4xl">Subscription</h4>
              <p className="text-6xl font-bold text-green-600">€12</p>
              <p className="text-2xl">per month</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-4xl">Sales Target</h4>
              <p className="text-6xl font-bold text-purple-600">30,000</p>
              <p className="text-2xl">units in Year 1</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide11;