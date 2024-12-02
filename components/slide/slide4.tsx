import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, Heart, Hospital, Euro, Users, Leaf } from 'lucide-react';

const ConclusionSlides = () => {
  return (
    <div className="s">
      {/* Slide 12 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 flex flex-col h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Impact Social</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Améliorer des Vies"</h3>
          
          <div className="flex align-middle h-full w-full gap-6 text-2xl">
            <div className="w-1/2 h-full space-y-4">
              <div className="h-1/2 w-full flex align-middle justify-center items-center space-x-3">
                <Heart className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Bénéfices pour les Utilisateurs</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Autonomie renforcée</li>
                    <li>Sécurité accrue</li>
                    <li>Meilleure qualité de vie</li>
                  </ul>
                </div>
              </div>

              <div className="h-1/2 w-full items-center justify-center flex space-x-3">
                <Hospital className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Impact sur le Système de Santé</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Réduction des hospitalisations</li>
                    <li>Optimisation des ressources</li>
                    <li>Suivi préventif amélioré</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 h-full w-1/2">
              <div className="h-1/2 w-full justify-center flex items-center space-x-3">
                <Euro className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Impact Économique</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Réduction des coûts de santé</li>
                    <li>Efficience des soins</li>
                    <li>Modèle économique durable</li>
                  </ul>
                </div>
              </div>

              <div className="h-1/2 w-full justify-center flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Développement Durable</h4>
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Réduction des déchets médicaux</li>
                    <li>Optimisation des ressources</li>
                    <li>Impact environnemental maîtrisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 13 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Conclusion</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Transformer les Soins aux Seniors"</h3>

          <div className="flex w-full h-[50%] justify-around items-center text-2xl gap-4">
            <div className="p-4 bg-blue-50 h-1/2 w-1/4 rounded-lg">
              <h4 className="font-semibold text-blue-800">Le Problème</h4>
              <p className="mt-2">Vieillissement démographique et besoin croissant d'autonomie des seniors</p>
            </div>

            <div className="p-4 bg-green-50 h-1/2 w-1/4 rounded-lg">
              <h4 className="font-semibold text-green-800">Notre Solution</h4>
              <p className="mt-2">SmartVision Care Glasses : technologie innovante au service du bien-être</p>
            </div>

            <div className="p-4 bg-purple-50 h-1/2 w-1/4 rounded-lg">
              <h4 className="font-semibold text-purple-800">Les Bénéfices</h4>
              <p className="mt-2">Autonomie accrue, sécurité renforcée et soins optimisés</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-2xl">
            <h4 className="font-semibold text-blue-800">Notre Vision</h4>
            <p className="mt-2">Construire une société plus inclusive où la technologie permet aux seniors de vivre de manière autonome et sécurisée, tout en restant connectés à leurs proches et aux services de santé.</p>
          </div>

          <div className="mt-6 text-center text-2xl">
            <p className="text-3xl font-semibold text-blue-600">Rejoignez-nous dans cette transformation des soins aux seniors</p>
            <p className="mt-2 text-gray-600">Ensemble, créons un avenir où l'innovation technologique améliore la vie de nos aînés</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ConclusionSlides;