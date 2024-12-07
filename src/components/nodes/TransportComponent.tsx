import Rete from 'rete';
import { NodeControl } from '../controls/NodeControl';

const socket = new Rete.Socket('Number');

export class TransportComponent extends Rete.Component {
  constructor() {
    super('Process');
  }

  async builder(node: any) {
    const input = new Rete.Input('input', 'Input', socket);
    const output = new Rete.Output('output', 'Output', socket);
    const ctrl = new NodeControl(this.editor, 'distance', node);
    
    node.data.distance = node.data.distance || 100;

    return node
      .addInput(input)
      .addControl(ctrl)
      .addOutput(output);
  }

  worker(node: any, inputs: any, outputs: any) {
    const input = inputs['input']?.[0] || 0;
    const distance = node.data.distance;
    outputs['output'] = input * (1 + distance * 0.001);
  }
}