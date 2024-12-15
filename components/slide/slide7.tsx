import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, HeartPulse, Pill, Eye, Bell } from 'lucide-react';

interface CoreFeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const CoreFeatureCard: React.FC<CoreFeatureCardProps> = ({ icon: Icon, title, description, color }) => (
  <div className={`bg-${color}-50 p-6 rounded-lg hover:bg-${color}-100 transition-colors h-full`}>
    <Icon className={`w-12 h-12 text-${color}-600 mb-4`} />
    <h3 className="text-4xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-2xl">{description}</p>
  </div>
);

const Slide7 = () => {
  return (
    <div className="h-full w-full">
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-6 h-[80%]">
          <div className="flex justify-between items-center">
            <h2 className="text-6xl font-bold text-blue-800">Core Features</h2>
            <div className="text-xl text-gray-600 italic">
              "Innovation at the service of seniors"
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Left column - Main features */}
            <div className="space-y-6 flex flex-col">
              <CoreFeatureCard 
                icon={HeartPulse}
                title="Biometric Monitoring"
                description="Real-time tracking of vital signs including heart rate, temperature, and oxygen levels"
                color="red"
              />
              <CoreFeatureCard 
                icon={Bell}
                title="Emergency Alerts"
                description="Instant notifications to caregivers and medical staff in case of emergencies"
                color="orange"
              />
            </div>

            {/* Right column - Additional features */}
            <div className="space-y-6 flex flex-col h-full">
              <CoreFeatureCard 
                icon={Pill}
                title="Medication Management"
                description="Smart reminders and tracking of medication schedules"
                color="green"
              />
              <CoreFeatureCard 
                icon={Eye}
                title="Visual Assistance"
                description="AR display for navigation and daily activity support"
                color="purple"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Slide7;