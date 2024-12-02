import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Clock, Users, Brain, Check } from 'lucide-react';
import ju  from '@/public/julien.jpg';
import ma  from '@/public/matteo.jpg';
import li  from '@/public/lilian.jpg';
import le  from '@/public/leo.jpg';
import re  from '@/public/remi.jpg';
import logo from '@/public/logo.jpg';

const OpeningSlides = () => {
  return (
    <div className="space-y-8">
      {/* Slide 1 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h1 className="text-6xl font-bold text-center text-blue-800">SmartVision Care Glasses</h1>
          <p className="text-4xl text-center text-blue-600">Au service de votre vision et de votre avenir</p>
          
          <div className="h-[80%] w-full gap-10 flex items-center justify-center mt-8">
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
                <Image src={ju} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Julien Tournier</h3>
              <p className="text-lg">Responsable Technique</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={ma} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Matteo Cruz</h3>
              <p className="text-lg">Responsable Marketing</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={li} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Lilian Mayet</h3>
              <p className="text-lg">Responsable Financier</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={le} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Léo Zerbib</h3>
              <p className="text-lg">Responsable Produit</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto bg-gray-200 rounded-full mb-2">
              <Image src={re} alt="Julien" className="rounded-full" />
              </div>
              <h3 className="font-semibold">Rémi Godet</h3>
              <p className="text-lg">Chef de Projet</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 2 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Pourquoi des Lunettes Intelligentes ?</h2>
          <div className='h-[80%] w-full flex'>
            <div className="h-full w-1/2">
                <div className="absolute w-1 bg-blue-200 h-[80%] left-4"></div>
                <div className="space-y-6 ml-12 flex h-full flex-col w-full">
                <div className="relative h-1/3 w-full">
                    <div className="absolute  w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-12 h-12 text-white" />
                    </div>
                    <div className='flex-col flex text-3xl pt-8 justify-center w-full h-full'>
                    <h3 className="font-semibold">1950-1980</h3>
                    <p>Premiers appareils auditifs électroniques</p>
                    <p>Débuts de l'assistance technologique aux seniors</p>
                    </div>
                </div>
                
                <div className="relative h-1/3 w-full">
                    <div className="absolute  w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className='flex-col flex text-3xl pt-8 justify-center w-full h-full'>
                    <h3 className="font-semibold">1980-2010</h3>
                    <p>Émergence des dispositifs de télésurveillance</p>
                    <p>Développement des systèmes d'alerte</p>
                    </div>
                </div>
                
                <div className="relative h-1/3 w-full">
                    <div className="absolute  w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div className='flex-col flex text-3xl pt-8 justify-center w-full h-full'>
                    <h3 className="font-semibold">2010-2023</h3>
                    <p>Révolution des objets connectés</p>
                    <p>Intelligence artificielle et réalité augmentée</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="h-full flex justify-center items-center w-1/2 relative">
                <Image src={logo} alt="Julien" className="rounded-full" />
            </div>
            </div>
            
          </div>
      </Card>

      {/* Slide 3 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Du Classique au Connecté</h2>
          
          <div className="grid grid-cols-2 gap-8 h-[60%] text-2xl">
            <div className="p-4 bg-gray-50 rounded-lg flex h-full justify-center flex-col">
              <h3 className="font-semibold text-4xl mb-4">Solutions Classiques</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-gray-600" />
                  <span>Cannes et déambulateurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-gray-600" />
                  <span>Boutons d'alerte simples</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-gray-600" />
                  <span>Lunettes correctrices basiques</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg  flex h-full justify-center flex-col">
              <h3 className="font-semibold text-4xl mb-4">Solutions Intelligentes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-blue-600" />
                  <span>Capteurs biométriques intégrés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-blue-600" />
                  <span>IA prédictive et préventive</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-12 h-12 text-blue-600" />
                  <span>Réalité augmentée assistive</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 h-[25%] bg-yellow-50">
            <h3 className="font-semibold text-4xl mb-2">Avantages des Solutions Intelligentes</h3>
            <ul className="h-[80%] gap-4 flex justify-around items-center rounded-lg">
              <li className="flex items-start gap-2">
                <Check className="w-12 h-12 mb-3 text-green-600" />
                <span>Surveillance continue et préventive</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-12 h-12 mb-3 text-green-600" />
                <span>Personnalisation avancée</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-12 h-12 mb-3 text-green-600" />
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