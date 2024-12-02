import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Eye, Heart, Thermometer, Activity, BatteryCharging } from 'lucide-react';
import hist from '@/public/hist.jpg';
import a from '@/public/img3.jpg';
import b from '@/public/img2.jpg';
import c from '@/public/img1.jpg';

import Image from 'next/image';

const TechnicalSlides = () => {
  return (

    
    <div className="">

      {/* Slide 4 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4  h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">L'évolution des Lunettes Intelligentes</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Motivation Technologique"</h3>
          
          <div className="flex flex-wrap h-[80%] text-2xl">
            <div className="p-4 w-1/2 bg-blue-50 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Avancées Technologiques
              </h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Intelligence Artificielle Embarquée</li>
                <li>Réalité Augmentée Intuitive</li>
                <li>IoT et Connectivité Avancée</li>
              </ul>
            </div>
            <div className='w-1/2 h-1/3 p-2'>
                <Image src={a} alt="Julien" className="h-full object-contain rounded-md" />
            </div>

            <div className="p-4 w-1/2 bg-green-50 rounded-lg">
              <h4 className="font-semibold">Soutien Politique</h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Plans nationaux senior-tech</li>
                <li>Subventions à l'innovation</li>
                <li>Réformes de santé digitale</li>
              </ul>
            </div>

            <div className='w-1/2 h-1/3 p-2'>
                <Image src={b} alt="Julien" className='h-full object-contain rounded-md' />
            </div>

            <div className="p-4 w-1/2 bg-purple-50 rounded-lg">
              <h4 className="font-semibold">Croissance du Secteur</h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Marché en expansion rapide</li>
                <li>Demande croissante</li>
                <li>Innovations continues</li>
              </ul>
            </div>

            <div className='w-1/2 h-1/3 p-2'>
                <Image src={c} alt="Julien" className="h-full w-full object-contain rounded-md" />
            </div>
          </div>
        </div>
      </Card>
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4  h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">L'histoire des Lunettes</h2>          
          <div>
            <Image src={hist} alt="Julien" className="rounded-full" />
          </div>
          </div>
      </Card>

      {/* Slide 5 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Réponse aux Besoins</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Solutions SmartVision"</h3>

          <div className="flex w-full flex-grow h-[80%] gap-6 text-2xl">
            <div className="space-y-4 h-full w-1/2 flex flex-col">
              <div className="p-4 bg-red-50 h-1/2 rounded-lg flex flex-col justify-center">
                <h4 className="font-semibold">Problématiques Actuelles</h4>
                <ul className="list-disc ml-4">
                  <li>Perte d'autonomie</li>
                  <li>Risques de chutes</li>
                  <li>Suivi médical complexe</li>
                  <li>Isolement social</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 h-1/2 rounded-lg flex flex-col justify-center">
                <h4 className="font-semibold">Bénéfices Fonctionnels</h4>
                <ul className="list-disc ml-4">
                  <li>Surveillance en temps réel</li>
                  <li>Alertes intelligentes</li>
                  <li>Interface avec les soignants</li>
                  <li>Communication facilitée</li>
                </ul>
              </div>
            </div>

            <div className="p-4 h-full w-1/2 bg-blue-50 rounded-lg flex flex-col justify-center">
              <h4 className="font-semibold">Impact Environnemental</h4>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <BatteryCharging className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Conception Durable</p>
                    <p>Matériaux recyclables et batterie longue durée</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Optimisation Ressources</p>
                    <p>Réduction des déplacements médicaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 6 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Caractéristiques Techniques</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Fonctionnement SmartVision"</h3>

          <div className="flex w-full h-[40%] flex-grow gap-4 items-center text-2xl">
            <div className="bg-blue-50 w-1/3 rounded-lg p-6">
              <h4 className="font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Capteurs Biométriques
              </h4>
              <ul className="list-disc ml-4">
                <li>Fréquence cardiaque</li>
                <li>Température corporelle</li>
                <li>Saturation en oxygène</li>
                <li>Détection des chutes</li>
              </ul>
            </div>

            <div className="p-6 bg-purple-50 w-1/3 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" />
                IA et RA
              </h4>
              <ul className="list-disc ml-4">
                <li>Analyse prédictive</li>
                <li>Interface intuitive</li>
                <li>Alertes intelligentes</li>
                <li>Assistance visuelle</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 w-1/3 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-500" />
                Application Mobile
              </h4>
              <ul className="list-disc ml-4">
                <li>Suivi en temps réel</li>
                <li>Historique médical</li>
                <li>Communication soignants</li>
                <li>Gestion des alertes</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-8 bg-gray-50 rounded-lg text-2xl">
            <h4 className="font-semibold">Intégration Système</h4>
            <p className="mt-2">
              Toutes les fonctionnalités sont interconnectées via une plateforme cloud sécurisée, 
              permettant une synchronisation en temps réel entre les lunettes, l'application mobile, 
              et les systèmes hospitaliers.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TechnicalSlides;