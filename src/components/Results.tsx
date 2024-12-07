import React from 'react';
import { useNodeStore } from '../store/nodeStore';

export function Results() {
  const calculateResults = useNodeStore((state) => state.calculateResults);
  const results = calculateResults();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-3">LCA Results</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-red-50 rounded-lg">
          <div className="text-lg font-semibold text-red-700">Emissions</div>
          <div className="text-2xl">{results.emissions.toFixed(2)} kgCO₂e</div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-semibold text-blue-700">Energy</div>
          <div className="text-2xl">{results.energy.toFixed(2)} MJ</div>
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg">
          <div className="text-lg font-semibold text-yellow-700">Waste</div>
          <div className="text-2xl">{results.waste.toFixed(2)} kg</div>
        </div>
      </div>
    </div>
  );
}