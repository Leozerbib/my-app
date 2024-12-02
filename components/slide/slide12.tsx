import React from 'react';
import { Card } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const FinanceChart = dynamic(() => import('../graph').then(mod => mod.FinanceChart), {
    ssr: false,
    loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
  });

const Slide12 = () => {
    const financialData = [
        { year: '2024', revenue: 9.98, costs: 12.5, profit: -2.52 },
        { year: '2025', revenue: 11.47, costs: 8.18, profit: 3.29 },
        { year: '2026', revenue: 13.20, costs: 8.95, profit: 4.25 },
        { year: '2027', revenue: 15.19, costs: 9.84, profit: 5.35 },
        { year: '2028', revenue: 17.48, costs: 13.87, profit: 3.61 }
      ];
  return (
    <div className="">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Business Model</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Financial Plan"</h3>

          <div className="w-full h-[50%]">
            <FinanceChart data={financialData} />
          </div>

          <div className="grid grid-cols-2 text-2xl gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold">Revenue Sources</h4>
              <ul className="list-disc ml-4">
                <li>Glasses sales: €275/unit</li>
                <li>Subscriptions: €12/month</li>
                <li>Healthcare facility services</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold">Initial Funding</h4>
              <ul className="list-disc ml-4">
                <li>Private investors: €5M</li>
                <li>Bank loans: €2.5M</li>
                <li>Grants: €1M</li>
                <li>Crowdfunding: €1M</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide12;