import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Slide17 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h2 className="text-7xl font-bold text-blue-800">Thank You</h2>
          
          <div className="text-2xl text-gray-600 text-center max-w-2xl">
            "At the service of your vision and your future"
          </div>

          {/* Team Section */}
          <div className="grid grid-cols-5 gap-8 mt-8">
            <div className="text-center space-y-2">
              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JT</span>
              </div>
              <div className="font-semibold">Julien Tournier</div>
              <div className="text-sm text-gray-600">Technical Manager</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">MC</span>
              </div>
              <div className="font-semibold">Matteo Cruz</div>
              <div className="text-sm text-gray-600">Marketing Manager</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">LM</span>
              </div>
              <div className="font-semibold">Lilian Mayet</div>
              <div className="text-sm text-gray-600">Financial Manager</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">LZ</span>
              </div>
              <div className="font-semibold">Léo Zerbib</div>
              <div className="text-sm text-gray-600">Product Manager</div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">RG</span>
              </div>
              <div className="font-semibold">Rémi Godet</div>
              <div className="text-sm text-gray-600">Project Manager</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 flex gap-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>contact@smartvision.care</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-5 h-5" />
              <span>www.smartvision.care</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Linkedin className="w-5 h-5" />
              <span>SmartVision Care</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide17;