import Rete from 'rete';
import { NumControl } from '../controls/NumControl';

const socket = new Rete.Socket('Number');

export class TransportComponent extends Rete.Component {
  constructor() {
    super('Transport');
  }

  async builder(node: any) {
    const input = new Rete.Input('input', 'Input', socket);
    const output = new Rete.Output('output', 'Output', socket);
    const ctrl = new NumControl(this.editor, 'distance', node);
    
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