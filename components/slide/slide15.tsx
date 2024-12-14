import React from 'react';
import { Card } from '@/components/ui/card';
import { Beaker, Factory, Globe, Check, ArrowRight } from 'lucide-react';

const Slide15 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Development Roadmap</h2>
          
          <div className="grid grid-cols-3 gap-6 h-[80%] relative">
            {/* Year 1 */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Beaker className="w-12 h-12 text-blue-600" />
                  <h3 className="text-3xl font-semibold">Year 1</h3>
                </div>
                <h4 className="text-xl font-semibold mb-4">R&D and Certification</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-600 mt-1" />
                    <span>Initial R&D and prototype development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-600 mt-1" />
                    <span>Biometric sensor testing and integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-600 mt-1" />
                    <span>CE/FDA medical certification process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-600 mt-1" />
                    <span>Software development and testing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Year 2 */}
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Factory className="w-12 h-12 text-green-600" />
                  <h3 className="text-3xl font-semibold">Year 2</h3>
                </div>
                <h4 className="text-xl font-semibold mb-4">Production and Launch</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <span>Manufacturing setup and first batch production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <span>Marketing campaign launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <span>Initial hospital partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-green-600 mt-1" />
                    <span>Distribution network establishment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Years 3-5 */}
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-12 h-12 text-purple-600" />
                  <h3 className="text-3xl font-semibold">Years 3-5</h3>
                </div>
                <h4 className="text-xl font-semibold mb-4">Expansion & Optimization</h4>
                
                {/* Year 3 */}
                <div className="mb-4">
                  <h5 className="font-semibold text-purple-700">Year 3</h5>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1" />
                      <span>International market entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1" />
                      <span>Feature enhancement based on user feedback</span>
                    </li>
                  </ul>
                </div>

                {/* Year 4 */}
                <div className="mb-4">
                  <h5 className="font-semibold text-purple-700">Year 4</h5>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1" />
                      <span>Production scale optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1" />
                      <span>Additional healthcare integrations</span>
                    </li>
                  </ul>
                </div>

                {/* Year 5 */}
                <div>
                  <h5 className="font-semibold text-purple-700">Year 5</h5>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1" />
                      <span>Next-gen product development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1" />
                      <span>Global market expansion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute top-1/2 left-[33%] w-[66%] h-0.5 bg-gray-200 -z-10"></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide15;