import { Node } from 'reactflow';
import { NodeData } from '../types/nodes';

export const createNodeData = (type: 'resource' | 'production' | 'transport'): NodeData['values'] & NodeData['units'] => {
  switch (type) {
    case 'resource':
      return {
        values: { material: 100, energy: 50 },
        units: { material: 'kg', energy: 'kWh' },
      };
    case 'production':
      return {
        values: { emissions: 75, waste: 25 },
        units: { emissions: 'kgCO2', waste: 'kg' },
      };
    case 'transport':
      return {
        values: { distance: 200, fuel: 40 },
        units: { distance: 'km', fuel: 'L' },
      };
  }
};

export const generateNodePosition = () => ({
  x: Math.random() * 300 + 100,
  y: Math.random() * 300 + 100,
});

export const createNode = (type: 'resource' | 'production' | 'transport'): Node<NodeData> => {
  const { values, units } = createNodeData(type);
  return {
    id: `${type}-${Date.now()}`,
    type,
    position: generateNodePosition(),
    data: {
      label: type.charAt(0).toUpperCase() + type.slice(1),
      type,
      values,
      units,
    },
  };
};