import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export function useEditorStore() {
  const store = useStore();

  useEffect(() => {
    return () => {
      // Cleanup store when component unmounts
      store.getState().nodes.forEach((node) => store.getState().removeNode(node.id));
    };
  }, []);

  return store;
}