import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Ban, Hospital, Users, AlertCircle } from 'lucide-react';

const Slide3 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Key Pain Points</h2>
          
          <div className="grid grid-cols-3 gap-6 h-[80%] text-2xl">
            <div className="p-4 bg-red-50 hover:bg-red-100 rounded-lg flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <Ban className="w-12 h-12 text-red-600" />
                <h3 className="font-semibold text-3xl">Loss of Autonomy</h3>
              </div>
              <p className="text-gray-700">
                Reduced ability to perform daily activities independently, leading to decreased quality of life
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-12 h-12 text-orange-600" />
                <h3 className="font-semibold text-3xl">Risk of Accidents</h3>
              </div>
              <p className="text-gray-700">
                Increased vulnerability to falls and accidents, requiring constant monitoring
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="w-12 h-12 text-blue-600" />
                <h3 className="font-semibold text-3xl">Medical Monitoring</h3>
              </div>
              <p className="text-gray-700">
                Complex health monitoring needs requiring frequent medical appointments
              </p>
            </div>
            
            <div className="col-span-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg flex items-center">
              <div className="flex items-center gap-2">
                <Users className="w-12 h-12 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-3xl">Social Isolation</h3>
                  <p className="text-gray-700">
                    Reduced social interactions and increased feelings of loneliness among elderly
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 hover:bg-green-100 rounded-lg flex items-center">
              <div className="flex items-center gap-2">
                <Hospital className="w-12 h-12 text-green-600" />
                <div>
                  <h3 className="font-semibold text-3xl">Healthcare Strain</h3>
                  <p className="text-gray-700">
                    Overwhelmed healthcare systems struggling to provide adequate care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide3;