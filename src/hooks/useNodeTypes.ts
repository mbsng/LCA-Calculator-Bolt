import { useMemo } from 'react';
import { ResourceNode } from '../components/nodes/ResourceNode';
import { ProcessNode } from '../components/nodes/ProcessNode';
import { TransportNode } from '../components/nodes/TransportNode';

export function useNodeTypes() {
  return useMemo(() => ({
    resource: ResourceNode,
    process: ProcessNode,
    transport: TransportNode
  }), []);
}