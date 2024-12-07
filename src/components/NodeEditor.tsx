import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Connection,
  Edge,
  addEdge,
  NodeChange,
  EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useNodeStore } from '../store/nodeStore';
import { ResourceNode } from './nodes/ResourceNode';
import { ProcessNode } from './nodes/ProcessNode';
import { TransportNode } from './nodes/TransportNode';
import { TargetNode } from './nodes/TargetNode';
import { GoalEdge } from './edges/GoalEdge';

const nodeTypes = {
  resource: ResourceNode,
  process: ProcessNode,
  transport: TransportNode,
  target: TargetNode,
};

const edgeTypes = {
  goal: GoalEdge,
};

export function NodeEditor() {
  const { nodes, edges, setNodes, setEdges } = useNodeStore();

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => changes.reduce((acc, change) => {
      if (change.type === 'position' && change.position) {
        return acc.map((node) => {
          if (node.id === change.id) {
            return { ...node, position: change.position };
          }
          return node;
        });
      }
      return acc;
    }, nds));
  }, [setNodes]);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((eds) => changes.reduce((acc, change) => {
      if (change.type === 'remove') {
        return acc.filter((edge) => edge.id !== change.id);
      }
      return acc;
    }, eds));
  }, [setEdges]);

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      if (params.source && params.target) {
        const targetNode = nodes.find(n => n.id === params.target);
        if (targetNode?.type === 'target') {
          setEdges((eds) => addEdge({
            ...params,
            type: 'goal',
            animated: true,
            data: {
              targetValue: targetNode.data.targetValue,
              isPercentage: targetNode.data.isPercentage
            }
          }, eds));
        } else {
          setEdges((eds) => addEdge({ ...params, animated: true }, eds));
        }
      }
    },
    [setEdges, nodes]
  );

  return (
    <div className="w-full h-[600px] border border-gray-200 rounded-lg bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        deleteKeyCode="Delete"
        selectionKeyCode="Shift"
        multiSelectionKeyCode="Control"
        snapToGrid
        snapGrid={[15, 15]}
        connectionMode="loose"
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}