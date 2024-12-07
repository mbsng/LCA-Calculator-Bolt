import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { useNodeStore } from '../../store/nodeStore';

interface ProcessNodeData {
  label: string;
  efficiency: number;
  emissions: number;
  energy: number;
  waste: number;
}

export const ProcessNode = memo(({ id, data }: NodeProps<ProcessNodeData>) => {
  const updateNodeData = useNodeStore((state) => state.updateNodeData);

  const handleEfficiencyChange = (efficiency: number) => {
    updateNodeData(id, {
      efficiency,
      emissions: 40 * efficiency,
      energy: 80 * efficiency,
      waste: 20 * efficiency
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-blue-500 min-w-[200px]">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="font-bold text-lg mb-2">{data.label}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-sm">Efficiency:</label>
          <input
            type="number"
            value={data.efficiency}
            onChange={(e) => handleEfficiencyChange(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
            step="0.1"
            min="0"
            max="1"
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