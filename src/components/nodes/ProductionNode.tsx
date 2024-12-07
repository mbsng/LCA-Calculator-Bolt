import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '../../types/nodes';

interface ProductionNodeProps {
  data: NodeData;
}

export function ProductionNode({ data }: ProductionNodeProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-green-500">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="font-bold text-lg mb-2">{data.label}</div>
      {Object.entries(data.values).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">{key}:</span>
          <span className="text-sm">
            {value} {data.units[key]}
          </span>
        </div>
      ))}
    </div>
  );
}