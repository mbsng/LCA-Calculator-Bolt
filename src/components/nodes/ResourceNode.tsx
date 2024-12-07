import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { useNodeStore } from '../../store/nodeStore';

interface ResourceNodeData {
  label: string;
  value: number;
  emissions: number;
  energy: number;
  waste: number;
}

export const ResourceNode = memo(({ id, data }: NodeProps<ResourceNodeData>) => {
  const updateNodeData = useNodeStore((state) => state.updateNodeData);

  const handleValueChange = (value: number) => {
    updateNodeData(id, {
      value,
      emissions: value * 0.5,
      energy: value,
      waste: value * 0.1
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-green-500 min-w-[200px]">
      <Handle type="source" position={Position.Right} />
      <div className="font-bold text-lg mb-2">{data.label}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-sm">Resource Amount:</label>
          <input
            type="number"
            value={data.value}
            onChange={(e) => handleValueChange(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
            min="0"
          />
        </div>
        <div className="text-sm text-gray-600">
          <div>Emissions: {data.emissions.toFixed(1)} kgCO₂e</div>
          <div>Energy: {data.energy.toFixed(1)} MJ</div>
          <div>Waste: {data.waste.toFixed(1)} kg</div>
        </div>
      </div>
    </div>
  );
});