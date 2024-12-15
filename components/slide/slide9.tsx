import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, Hospital, AlertCircle, Video } from 'lucide-react';

const Slide9 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-6 h-[80%]">
          <h2 className="text-6xl font-bold text-blue-800">Healthcare Integration</h2>
          
          <div className="grid grid-cols-4 gap-6 h-full">
            {/* Data Flow Diagram */}
            <div className="col-span-2 bg-gray-50 rounded-lg p-6">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Connection Lines */}
                <path d="M200,80 L80,150" z={0} stroke="#3B82F6" strokeWidth="2" fill="none" />
                <path d="M200,80 L320,150" z={0} stroke="#3B82F6" strokeWidth="2" fill="none" />
                <path d="M80,150 L200,250" z={0} stroke="#3B82F6" strokeWidth="2" fill="none" />
                <path d="M320,150 L200,250" z={0} stroke="#3B82F6" strokeWidth="2" fill="none" />
                {/* Hospital System */}
                <g transform="translate(200,50)">
                  <rect x="-70" y="-40" z={10} width="140" height="80" fill="#3B82F6" rx="8" />
                  <text x="0" y="5" textAnchor="middle" fill="black">Hospital System</text>
                </g>

                {/* SmartVision Glasses */}
                <g transform="translate(80,150)">
                  <circle r="50" fill="#8B5CF6" />
                  <text x="0" y="5" textAnchor="middle" fill="black">SmartVision</text>
                </g>

                {/* EMR System */}
                <g transform="translate(320,150)">
                  <rect x="-45" y="-45" z={10} width="90" height="90" fill="#10B981" rx="8" />
                  <text x="0" y="5" textAnchor="middle" fill="black">EMR</text>
                </g>

                {/* Alert System */}
                <g transform="translate(200,250)">
                  <polygon points="0,-40 40,40 -40,40" fill="#F97316" />
                  <text x="0" y="10" textAnchor="middle" fill="black">Alerts</text>
                </g>

          
              </svg>
            </div>

            {/* Integration Features */}
            <div className="col-span-2 space-y-4 flex flex-col justify-center">
              <div className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors grow">
                <div className="flex items-start gap-4">
                  <FileText className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">EMR Connectivity</h3>
                    <p className="text-gray-600">
                      Seamless integration with Electronic Medical Records for real-time health data synchronization
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors grow">
                <div className="flex items-start gap-4">
                  <Hospital className="w-12 h-12 text-purple-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Hospital Integration</h3>
                    <p className="text-gray-600">
                      Direct connection to hospital systems for automated appointment scheduling and care coordination
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors grow">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-12 h-12 text-orange-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Alert System</h3>
                    <p className="text-gray-600">
                      Intelligent alert routing to medical staff based on severity and urgency
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors grow">
                <div className="flex items-start gap-4">
                  <Video className="w-12 h-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Telemedicine</h3>
                    <p className="text-gray-600">
                      Built-in support for virtual consultations and remote monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide9;