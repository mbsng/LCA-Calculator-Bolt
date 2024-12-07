import React from 'react';
import { Factory, Leaf, Truck, Target } from 'lucide-react';
import { useNodeStore } from '../store/nodeStore';

export function Toolbar() {
  const addNode = useNodeStore((state) => state.addNode);

  const handleAddResource = () => {
    addNode({
      type: 'resource',
      data: {
        label: `Resource ${Date.now()}`,
        value: 100,
        emissions: 50,
        energy: 100,
        waste: 10
      }
    });
  };

  const handleAddProcess = () => {
    addNode({
      type: 'process',
      data: {
        label: `Process ${Date.now()}`,
        efficiency: 0.8,
        emissions: 40,
        energy: 80,
        waste: 20
      }
    });
  };

  const handleAddTransport = () => {
    addNode({
      type: 'transport',
      data: {
        label: `Transport ${Date.now()}`,
        distance: 100,
        emissions: 30,
        energy: 60,
        waste: 5
      }
    });
  };

  const handleAddTarget = () => {
    addNode({
      type: 'target',
      data: {
        label: `Target ${Date.now()}`,
        targetType: 'emissions',
        targetValue: 20,
        isPercentage: true
      }
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex space-x-4">
        <button 
          onClick={handleAddResource}
          className="flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Leaf className="w-5 h-5" />
          <span>Add Resource</span>
        </button>
        <button 
          onClick={handleAddProcess}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <Factory className="w-5 h-5" />
          <span>Add Process</span>
        </button>
        <button 
          onClick={handleAddTransport}
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <Truck className="w-5 h-5" />
          <span>Add Transport</span>
        </button>
        <button 
          onClick={handleAddTarget}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <Target className="w-5 h-5" />
          <span>Add Target</span>
        </button>
      </div>
    </div>
  );
}