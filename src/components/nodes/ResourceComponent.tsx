import Rete from 'rete';
import { NodeControl } from '../controls/NodeControl';

const socket = new Rete.Socket('Number');

export class ResourceComponent extends Rete.Component {
  constructor() {
    super('Resource');
  }

  async builder(node: any) {
    const out = new Rete.Output('value', 'Value', socket);
    const ctrl = new NodeControl(this.editor, 'value', node);
    
    node.data.value = node.data.value || 100;

    return node
      .addControl(ctrl)
      .addOutput(out);
  }

  worker(node: any, inputs: any, outputs: any) {
    outputs['value'] = node.data.value;
  }
}