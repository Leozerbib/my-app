import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Activity, AlertTriangle } from 'lucide-react';

const Slide2 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-6 h-full">
          <h2 className="text-6xl font-bold text-blue-800">The Challenge</h2>
          
          <div className="grid grid-cols-3 gap-8 h-[70%] text-2xl">
            <div className="p-6 bg-orange-50 hover:bg-orange-100 rounded-lg flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-12 h-12 text-orange-600" />
                <h3 className="font-semibold text-3xl">Aging Population</h3>
              </div>
              <p className="text-gray-700">
                By 2050, nearly 22% of the global population will be over 60 years old, creating unprecedented challenges for our healthcare systems.
              </p>
            </div>
            
            <div className="p-6 bg-red-50 hover:bg-red-100 rounded-lg flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="w-12 h-12 text-red-600" />
                <h3 className="font-semibold text-3xl">Healthcare Pressure</h3>
              </div>
              <p className="text-gray-700">
                Growing strain on healthcare systems with increasing demand for specialized care and monitoring services.
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 hover:bg-blue-100 rounded-lg flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="w-12 h-12 text-blue-600" />
                <h3 className="font-semibold text-3xl">Innovation Need</h3>
              </div>
              <p className="text-gray-700">
                Urgent need for innovative solutions to support elderly care while maintaining quality of life and independence.
              </p>
            </div>
          </div>

          <div className="text-xl text-center text-gray-600 italic">
            "Our mission is to transform the challenges of aging into opportunities for innovation for a more inclusive society."
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide2;