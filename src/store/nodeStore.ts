import { create } from 'zustand';
import { Node, Edge } from 'reactflow';

interface NodeStore {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[] | ((nodes: Node[]) => Node[])) => void;
  setEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
  updateNodeData: (nodeId: string, data: any) => void;
  addNode: (nodeData: { type: string; data: any }) => void;
  calculateResults: () => { emissions: number; energy: number; waste: number };
}

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'resource',
    position: { x: 100, y: 100 },
    data: { label: 'Raw Material', value: 100, emissions: 50, energy: 100, waste: 10 },
  },
  {
    id: '2',
    type: 'process',
    position: { x: 400, y: 100 },
    data: { label: 'Manufacturing', efficiency: 0.8, emissions: 40, energy: 80, waste: 20 },
  },
  {
    id: '3',
    type: 'transport',
    position: { x: 700, y: 100 },
    data: { label: 'Transport', distance: 100, emissions: 30, energy: 60, waste: 5 },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

export const useNodeStore = create<NodeStore>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  setNodes: (nodes) => set({ nodes: typeof nodes === 'function' ? nodes(get().nodes) : nodes }),
  setEdges: (edges) => set({ edges: typeof edges === 'function' ? edges(get().edges) : edges }),
  updateNodeData: (nodeId, newData) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      ),
    }));
  },
  addNode: (nodeData) => {
    const id = `${nodeData.type}-${Date.now()}`;
    const position = {
      x: Math.random() * 500,
      y: Math.random() * 300,
    };
    
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id,
          type: nodeData.type,
          position,
          data: nodeData.data,
        },
      ],
    }));
  },
  calculateResults: () => {
    const nodes = get().nodes;
    return nodes.reduce(
      (acc, node) => ({
        emissions: acc.emissions + (node.data.emissions || 0),
        energy: acc.energy + (node.data.energy || 0),
        waste: acc.waste + (node.data.waste || 0),
      }),
      { emissions: 0, energy: 0, waste: 0 }
    );
  },
}));