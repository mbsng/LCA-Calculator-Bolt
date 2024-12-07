import { ClassicPreset } from 'rete';

export class ResourceNode extends ClassicPreset.Node {
  constructor() {
    super('Resource');
    
    this.addOutput('output', new ClassicPreset.Output(socket, 'Output'));
    this.addControl(
      'value',
      new ClassicPreset.InputControl('number', { initial: 100 })
    );
  }

  data(inputs: any) {
    const value = this.controls.value.value;
    return { value };
  }
}