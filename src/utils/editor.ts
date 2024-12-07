import Rete from 'rete';
import AreaPlugin from 'rete-area-plugin';
import ConnectionPlugin from 'rete-connection-plugin';
import ReactRenderPlugin from 'rete-react-render-plugin';
import { ResourceComponent } from '../components/nodes/ResourceComponent';
import { ProcessComponent } from '../components/nodes/ProcessComponent';
import { TransportComponent } from '../components/nodes/TransportComponent';
import { createRoot } from 'react-dom/client';

export async function createEditor(container: HTMLElement) {
  const editor = new Rete.NodeEditor('lca@1.0.0', container);

  editor.use(ConnectionPlugin);
  editor.use(ReactRenderPlugin, { createRoot });
  editor.use(AreaPlugin);

  const components = [
    new ResourceComponent(),
    new ProcessComponent(),
    new TransportComponent()
  ];

  components.forEach(c => editor.register(c));

  const resource = await components[0].createNode({ value: 100 });
  const process = await components[1].createNode({ efficiency: 0.8 });
  const transport = await components[2].createNode({ distance: 100 });

  resource.position = [100, 200];
  process.position = [400, 200];
  transport.position = [700, 200];

  editor.addNode(resource);
  editor.addNode(process);
  editor.addNode(transport);

  editor.view.resize();
  editor.trigger('process');

  return editor;
}