import Rete from 'rete';
import { NumControl } from '../controls/NumControl';

const socket = new Rete.Socket('Number');

export class ProcessComponent extends Rete.Component {
  constructor() {
    super('Process');
  }

  async builder(node: any) {
    const input = new Rete.Input('input', 'Input', socket);
    const output = new Rete.Output('output', 'Output', socket);
    const ctrl = new NumControl(this.editor, 'efficiency', node);
    
    node.data.efficiency = node.data.efficiency || 0.8;

    return node
      .addInput(input)
      .addControl(ctrl)
      .addOutput(output);
  }

  worker(node: any, inputs: any, outputs: any) {
    const input = inputs['input']?.[0] || 0;
    const efficiency = node.data.efficiency;
    outputs['output'] = input * efficiency;
  }
}