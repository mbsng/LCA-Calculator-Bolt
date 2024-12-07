import { create } from 'zustand';
import { NodeData } from '../types/node';

interface Store {
  nodes: any[];
  connections: any[];
  addNode: (node: { type: string; data: NodeData }) => void;
  updateNode: (id: string, data: Partial<NodeData>) => void;
  removeNode: (id: string) => void;
  addConnection: (connection: any) => void;
  removeConnection: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  nodes: [],
  connections: [],
  addNode: (node) => set((state) => ({ 
    nodes: [...state.nodes, { 
      ...node,
      id: `${node.type}-${Date.now()}`,
      position: { x: Math.random() * 300, y: Math.random() * 300 }
    }] 
  })),
  updateNode: (id, data) => set((state) => ({
    nodes: state.nodes.map((node) =>
      node.id === id ? { ...node, data: { ...node.data, ...data } } : node
    ),
  })),
  removeNode: (id) => set((state) => ({
    nodes: state.nodes.filter((node) => node.id !== id),
    connections: state.connections.filter(
      (conn) => conn.source !== id && conn.target !== id
    ),
  })),
  addConnection: (connection) => set((state) => ({
    connections: [...state.connections, connection],
  })),
  removeConnection: (id) => set((state) => ({
    connections: state.connections.filter((conn) => conn.id !== id),
  })),
}));