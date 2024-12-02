import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check } from 'lucide-react';

const OpeningSlides = () => {
  return (
    <div className="space-y-8">
      {/* Slide 1 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center text-blue-800">SmartVision Care Glasses</h1>
          <p className="text-xl text-center text-blue-600">Au service de votre vision et de votre avenir</p>
          
          <div className="grid grid-cols-5 gap-4 mt-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2">
                <img src="/api/placeholder/96/96" alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Julien Tournier</h3>
              <p className="text-sm">Responsable Technique</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2">
                <img src="/api/placeholder/96/96" alt="Matteo" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Matteo Cruz</h3>
              <p className="text-sm">Responsable Marketing</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2">
                <img src="/api/placeholder/96/96" alt="Lilian" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Lilian Mayet</h3>
              <p className="text-sm">Responsable Financier</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2">
                <img src="/api/placeholder/96/96" alt="Léo" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Léo Zerbib</h3>
              <p className="text-sm">Responsable Produit</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2">
                <img src="/api/placeholder/96/96" alt="Rémi" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Rémi Godet</h3>
              <p className="text-sm">Chef de Projet</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 2 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Pourquoi des Lunettes Intelligentes ?</h2>
          
          <div className="relative">
            <div className="absolute w-1 bg-blue-200 h-full left-4"></div>
            <div className="space-y-6 ml-12">
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">1950-1980</h3>
                  <p>Premiers appareils auditifs électroniques</p>
                  <p>Débuts de l'assistance technologique aux seniors</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">1980-2010</h3>
                  <p>Émergence des dispositifs de télésurveillance</p>
                  <p>Développement des systèmes d'alerte</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">2010-2023</h3>
                  <p>Révolution des objets connectés</p>
                  <p>Intelligence artificielle et réalité augmentée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 3 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Du Classique au Connecté</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Solutions Classiques</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-600" />
                  <span>Cannes et déambulateurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-600" />
                  <span>Boutons d'alerte simples</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-600" />
                  <span>Lunettes correctrices basiques</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Solutions Intelligentes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Capteurs biométriques intégrés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>IA prédictive et préventive</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Réalité augmentée assistive</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Avantages des Solutions Intelligentes</h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-green-600" />
                <span>Surveillance continue et préventive</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-green-600" />
                <span>Personnalisation avancée</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-green-600" />
                <span>Intégration écosystème santé</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OpeningSlides;