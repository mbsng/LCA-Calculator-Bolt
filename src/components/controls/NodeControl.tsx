import React from 'react';
import { Control } from 'rete';

interface NodeControlProps {
  value: number;
  label: string;
  onChange: (value: number) => void;
}

export class NodeControl extends Control {
  props: NodeControlProps;
  component: React.FC<NodeControlProps>;

  constructor(emitter: any, key: string, node: any) {
    super(key);
    
    this.props = {
      value: node.data[key] || 0,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      onChange: (v: number) => {
        node.data[key] = v;
        emitter.trigger('process');
      }
    };

    this.component = ({ value, label, onChange }) => (
      <div className="p-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-2 py-1 border rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    );
  }
}