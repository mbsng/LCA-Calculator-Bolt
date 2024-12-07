import { ClassicPreset } from 'rete';

export class TransportNode extends ClassicPreset.Node {
  constructor() {
    super('Transport');
    
    this.addInput('input', new ClassicPreset.Input(socket, 'Input'));
    this.addOutput('output', new ClassicPreset.Output(socket, 'Output'));
    this.addControl(
      'distance',
      new ClassicPreset.InputControl('number', { initial: 100 })
    );
  }

  data(inputs: any) {
    const distance = this.controls.distance.value;
    const input = inputs['input']?.[0] || 0;
    return { value: input * (1 + distance * 0.001) };
  }
}