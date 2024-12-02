import React from 'react';
import { Card } from '@/components/ui/card';

const PresentationSlides = () => {
  return (
    <div className="">
      {/* Slide 10 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Slide 10: Plan de Développement</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Feuille de Route vers le Lancement"</h3>
          
          <div className="w-full flex pt-8 flex-col h-full gap-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Année 1</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>R&D initiale et développement des prototypes</li>
                <li>Tests des capteurs biométriques</li>
                <li>Certification médicale CE/FDA</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Année 2</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>Production des premiers lots</li>
                <li>Lancement des campagnes marketing</li>
                <li>Déploiement dans les premiers hôpitaux partenaires</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Année 3-5</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>Expansion internationale</li>
                <li>Développement de nouvelles fonctionnalités</li>
                <li>Optimisation des coûts de production</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 11 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="h-full w-full flex flex-col relative space-y-4">
          <h2 className="text-6xl font-bold text-blue-800">Slide 11: Analyse des Risques</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Anticipation et Mitigation des Défis"</h3>
          
          <div className="flex h-full w-full gap-4 align-middle">
            <div className="p-4 bg-red-50 rounded-lg w-full flex flex-col align-middle h-full justify-center">
              <h4 className="font-semibold text-4xl text-red-800">Risques Majeurs</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>Adoption lente par les seniors</li>
                <li>Investissements initiaux élevés</li>
                <li>Concurrence accrue</li>
                <li>Conformité réglementaire</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg w-full flex flex-col align-middle h-full justify-center">
              <h4 className="text-4xl font-semibold text-green-800">Solutions</h4>
              <ul className="text-2xl list-disc ml-4 space-y-2">
                <li>Campagnes locales ciblées</li>
                <li>Diversification des sources de financement</li>
                <li>Focus sur la qualité et le support client</li>
                <li>Collaboration avec des experts en réglementation</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PresentationSlides;