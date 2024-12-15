import React from 'react';
import Image from 'next/image';
import ju  from '@/public/julien.jpg';
import ma  from '@/public/matteo.jpg';
import li  from '@/public/lilian.jpg';
import le  from '@/public/leo.jpg';
import re  from '@/public/remi.jpg';
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
          <div className="h-[80%] w-full gap-10 flex items-center justify-center mt-8">
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
                <Image src={ju} alt="Julien" className="hover:scale-105 rounded-full" />
              </div>
              <h3 className="font-semibold">Julien Tournier</h3>
              <p className="text-lg">Technical Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={ma} alt="Julien" className=" hover:scale-105 rounded-full" />
              </div>
              <h3 className="font-semibold">Matteo Cruz</h3>
              <p className="text-lg">Marketing Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={li} alt="Julien" className="hover:scale-105 rounded-full" />
              </div>
              <h3 className="font-semibold">Lilian Mayet</h3>
              <p className="text-lg">Financial Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={le} alt="Julien" className="hover:scale-105 rounded-full" />
              </div>
              <h3 className="font-semibold">Léo Zerbib</h3>
              <p className="text-lg">Product Manager</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={re} alt="Julien" className="hover:scale-105 rounded-full" />
              </div>
              <h3 className="font-semibold">Rémi Godet</h3>
              <p className="text-lg">Project Manager</p>
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