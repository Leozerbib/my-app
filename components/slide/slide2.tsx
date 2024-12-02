import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Eye, Heart, Thermometer, Activity, BatteryCharging } from 'lucide-react';

const TechnicalSlides = () => {
  return (
    <div className="space-y-8">
      {/* Slide 4 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">L'évolution des Lunettes Intelligentes</h2>
          <h3 className="text-xl font-semibold text-blue-600">"Motivation Technologique"</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
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

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold">Soutien Politique</h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Plans nationaux senior-tech</li>
                <li>Subventions à l'innovation</li>
                <li>Réformes de santé digitale</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold">Croissance du Secteur</h4>
              <ul className="list-disc ml-4 space-y-2">
                <li>Marché en expansion rapide</li>
                <li>Demande croissante</li>
                <li>Innovations continues</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 5 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Réponse aux Besoins</h2>
          <h3 className="text-xl font-semibold text-blue-600">"Solutions SmartVision"</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold">Problématiques Actuelles</h4>
                <ul className="list-disc ml-4">
                  <li>Perte d'autonomie</li>
                  <li>Risques de chutes</li>
                  <li>Suivi médical complexe</li>
                  <li>Isolement social</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold">Bénéfices Fonctionnels</h4>
                <ul className="list-disc ml-4">
                  <li>Surveillance en temps réel</li>
                  <li>Alertes intelligentes</li>
                  <li>Interface avec les soignants</li>
                  <li>Communication facilitée</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg h-full">
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
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">Caractéristiques Techniques</h2>
          <h3 className="text-xl font-semibold text-blue-600">"Fonctionnement SmartVision"</h3>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
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

            <div className="p-4 bg-purple-50 rounded-lg">
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

            <div className="p-4 bg-green-50 rounded-lg">
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

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
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