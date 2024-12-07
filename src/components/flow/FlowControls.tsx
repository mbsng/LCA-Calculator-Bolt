import React from 'react';
import { Controls } from 'reactflow';

export function FlowControls() {
  return (
    <Controls
      showInteractive={false}
      className="bg-white shadow-lg rounded-lg"
    />
  );
}