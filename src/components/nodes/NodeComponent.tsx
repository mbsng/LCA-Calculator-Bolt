import React from 'react';
import { Node } from 'rete';

interface NodeProps {
  node: Node;
  bindSocket: (el: HTMLElement, type: string, socket: any) => void;
  bindControl: (el: HTMLElement, control: any) => void;
}

export function NodeComponent({ node, bindSocket, bindControl }: NodeProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
      <div className="font-bold mb-2">{node.name}</div>
      
      {/* Inputs */}
      {node.inputs.map(input => (
        <div key={input.key} className="mb-2">
          <div
            className="w-3 h-3 rounded-full bg-blue-500 cursor-pointer"
            ref={ref => ref && bindSocket(ref, "input", input)}
          />
          <span className="ml-2">{input.name}</span>
        </div>
      ))}
      
      {/* Controls */}
      {node.controls.map(control => (
        <div key={control.key} className="mb-2" ref={ref => ref && bindControl(ref, control)} />
      ))}
      
      {/* Outputs */}
      {node.outputs.map(output => (
        <div key={output.key} className="mb-2 text-right">
          <span className="mr-2">{output.name}</span>
          <div
            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer inline-block"
            ref={ref => ref && bindSocket(ref, "output", output)}
          />
        </div>
      ))}
    </div>
  );
}