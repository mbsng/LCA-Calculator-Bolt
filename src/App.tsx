import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { NodeEditor } from './components/NodeEditor';
import { Toolbar } from './components/Toolbar';
import { Results } from './components/Results';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">LCA Calculator</h1>
        <Toolbar />
        <ReactFlowProvider>
          <NodeEditor />
        </ReactFlowProvider>
        <Results />
      </div>
    </div>
  );
}

export default App;