import React from 'react';
import { Card } from '@/components/ui/card';
import { Cpu, Radio, Eye, Cloud } from 'lucide-react';

const Slide6 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Technical Innovation</h2>
          
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Main Technical Features */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Embedded Sensors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Heart rate monitoring</li>
                  <li>• Temperature sensing</li>
                  <li>• Motion detection</li>
                  <li>• Oxygen saturation</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
                <Radio className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">IoT Connectivity</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time data sync</li>
                  <li>• Emergency alerts</li>
                  <li>• Mobile integration</li>
                  <li>• Hospital connection</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                <Eye className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">AR Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Visual assistance</li>
                  <li>• Medication reminders</li>
                  <li>• Navigation help</li>
                  <li>• Activity guidance</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors">
                <Cloud className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">AI Capabilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Predictive analysis</li>
                  <li>• Pattern recognition</li>
                  <li>• Health insights</li>
                  <li>• Behavioral learning</li>
                </ul>
              </div>
            </div>

            {/* Technical Diagram */}
            <div className="bg-gray-50 h-full p-4 rounded-lg flex items-center justify-center"> 
              {/* Add SVG Technical Diagram Here */}
              <svg className="w-full flex items-center justify-center h-full align-middle" >
                <circle cx="100" cy="50" r="40" fill="#3B82F6" opacity="0.2"/>
                <circle cx="100" cy="50" r="30" fill="#3B82F6" opacity="0.4"/>
                <circle cx="100" cy="50" r="20" fill="#3B82F6"/>
                
                <line x1="100" y1="90" x2="100" y2="150" stroke="#3B82F6" strokeWidth="2"/>
                
                <rect x="60" y="150" width="80" height="40" rx="5" fill="#8B5CF6"/>
                
                <line x1="100" y1="190" x2="100" y2="250" stroke="#3B82F6" strokeWidth="2"/>
                
                <path d="M60,250 L140,250 L100,290 Z" fill="#10B981"/>
                
                <line x1="100" y1="290" x2="100" y2="350" stroke="#3B82F6" strokeWidth="2"/>
                
                <circle cx="100" cy="350" r="30" fill="#F97316"/>
                
                {/* Add text labels */}
                <text x="160" y="50" className="text-sm">Sensors</text>
                <text x="160" y="170" className="text-sm">Processing</text>
                <text x="160" y="350" className="text-sm">AI Core</text>
                <text x="160" y="270" className="text-sm">AR Display</text>
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide6;