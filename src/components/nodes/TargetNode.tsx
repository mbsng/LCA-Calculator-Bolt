import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { useNodeStore } from '../../store/nodeStore';
import { Target } from 'lucide-react';

interface TargetNodeData {
  label: string;
  targetType: 'emissions' | 'energy' | 'waste';
  targetValue: number;
  isPercentage: boolean;
}

export const TargetNode = memo(({ id, data }: NodeProps<TargetNodeData>) => {
  const updateNodeData = useNodeStore((state) => state.updateNodeData);

  const handleTargetChange = (value: number) => {
    updateNodeData(id, {
      targetValue: value
    });
  };

  const toggleUnit = () => {
    updateNodeData(id, {
      isPercentage: !data.isPercentage
    });
  };

  const getUnit = () => {
    if (data.isPercentage) return '%';
    switch (data.targetType) {
      case 'emissions': return 'kgCO₂e';
      case 'energy': return 'MJ';
      case 'waste': return 'kg';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-purple-500 min-w-[200px]">
      <Handle type="target" position={Position.Left} />
      <div className="flex items-center gap-2 mb-2">
        <Target className="w-5 h-5 text-purple-500" />
        <div className="font-bold text-lg">{data.label}</div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">
          Target Type: {data.targetType.charAt(0).toUpperCase() + data.targetType.slice(1)}
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Target Value:</label>
          <input
            type="number"
            value={data.targetValue}
            onChange={(e) => handleTargetChange(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
            min="0"
          />
          <button
            onClick={toggleUnit}
            className="px-2 py-1 text-sm bg-purple-100 rounded hover:bg-purple-200"
          >
            {getUnit()}
          </button>
        </div>
      </div>
    </div>
  );
});