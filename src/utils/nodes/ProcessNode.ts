import { ClassicPreset } from 'rete';

export class ProcessNode extends ClassicPreset.Node {
  constructor() {
    super('Process');
    
    this.addInput('input', new ClassicPreset.Input(socket, 'Input'));
    this.addOutput('output', new ClassicPreset.Output(socket, 'Output'));
    this.addControl(
      'efficiency',
      new ClassicPreset.InputControl('number', { initial: 0.8 })
    );
  }

  data(inputs: any) {
    const efficiency = this.controls.efficiency.value;
    const input = inputs['input']?.[0] || 0;
    return { value: input * efficiency };
  }
}