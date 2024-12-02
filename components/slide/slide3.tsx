

import React from 'react';
import { Card } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import { ChartConfig, ChartContainer } from '../ui/chart';
import { Bar, BarChart } from 'recharts';

const MarketChart = dynamic(() => import('../graph').then(mod => mod.MarketChart), {
    ssr: false,
    loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
  });
  
  const FinanceChart = dynamic(() => import('../graph').then(mod => mod.FinanceChart), {
    ssr: false,
    loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
  });
const BusinessSlides = () => {
  const marketData = [
    { year: '2023', value: 11.1, name: 'Taille du marché (Mds €)' },
    { year: '2024', value: 13.9 },
    { year: '2025', value: 17.4 },
    { year: '2026', value: 21.7 },
    { year: '2027', value: 26.8 }
  ];

  const financialData = [
    { year: '2024', revenue: 9.98, costs: 12.5, profit: -2.52 },
    { year: '2025', revenue: 11.47, costs: 8.18, profit: 3.29 },
    { year: '2026', revenue: 13.20, costs: 8.95, profit: 4.25 },
    { year: '2027', revenue: 15.19, costs: 9.84, profit: 5.35 },
    { year: '2028', revenue: 17.48, costs: 13.87, profit: 3.61 }
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <div className="space-y-8">
      {/* Slide 7 */}
      <Card className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Les Chiffres Clés</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"En Quelques Chiffres"</h3>
          
          <div className="w-full h-[50%]">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={marketData}>
                <Bar dataKey="marketData" fill="var(--chart-1)" radius={4} />
            </BarChart>
            </ChartContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-4xl">Coût Unitaire</h4>
              <p className="text-6xl font-bold text-blue-600">150€</p>
              <p className="text-2xl">Prix de vente: 275€</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-4xl">Abonnement</h4>
              <p className="text-6xl font-bold text-green-600">12€</p>
              <p className="text-2xl">par mois</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-4xl">Objectif Ventes</h4>
              <p className="text-6xl font-bold text-purple-600">30 000</p>
              <p className="text-2xl">unités en An 1</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 8 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full w-full">
          <h2 className="text-6xl font-bold text-blue-800">Analyse des Opportunités</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Stratégie d'Entrée sur le Marché"</h3>

          <div className="flex h-[80%] w-full flex-wrap text-2xl">
            <div className="p-4 bg-blue-50 w-1/2 rounded-lg">
              <h4 className="font-semibold text-blue-800">Forces</h4>
              <ul className="list-disc ml-4">
                <li>Surveillance complète des signes vitaux</li>
                <li>Interface intuitive en réalité augmentée</li>
                <li>Intégration avec systèmes hospitaliers</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 w-1/2 rounded-lg">
              <h4 className="font-semibold text-red-800">Faiblesses</h4>
              <ul className="list-disc ml-4">
                <li>Coûts initiaux élevés</li>
                <li>Dépendance aux certifications médicales</li>
                <li>Nouvelle marque sur le marché</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 w-1/2 rounded-lg">
              <h4 className="font-semibold text-green-800">Opportunités</h4>
              <ul className="list-disc ml-4">
                <li>Marché en forte croissance</li>
                <li>Population vieillissante</li>
                <li>Demande de solutions connectées</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 w-1/2 rounded-lg">
              <h4 className="font-semibold text-yellow-800">Menaces</h4>
              <ul className="list-disc ml-4">
                <li>Concurrence des géants tech</li>
                <li>Réticence des seniors</li>
                <li>Évolutions réglementaires</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Slide 9 */}
      <Card className="p-6 bg-white shadow-lg">
        <div className="space-y-4 h-full">
          <h2 className="text-6xl font-bold text-blue-800">Modèle Économique</h2>
          <h3 className="text-4xl font-semibold text-blue-600">"Plan Financier"</h3>

          <div className="w-full h-[50%]">
            <FinanceChart data={financialData} />
          </div>

          <div className="grid grid-cols-2 text-2xl gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold">Sources de Revenus</h4>
              <ul className="list-disc ml-4">
                <li>Vente des lunettes: 275€/unité</li>
                <li>Abonnements: 12€/mois</li>
                <li>Services aux établissements de santé</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold">Financement Initial</h4>
              <ul className="list-disc ml-4">
                <li>Investisseurs privés: 5M€</li>
                <li>Prêts bancaires: 2.5M€</li>
                <li>Subventions: 1M€</li>
                <li>Crowdfunding: 1M€</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BusinessSlides;