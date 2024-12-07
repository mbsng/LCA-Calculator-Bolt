import Rete from 'rete';

export class NumControl extends Rete.Control {
  component: any;
  props: any;
  
  constructor(emitter: any, key: string, node: any, readonly = false) {
    super(key);
    this.component = {
      render: (el: HTMLElement) => {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = node.data[key] || 0;
        input.readOnly = readonly;
        input.className = 'w-full px-2 py-1 border rounded';
        
        el.appendChild(input);
        
        input.addEventListener('change', () => {
          this.setValue(+input.value);
          this.emitter.trigger('process');
        });
        
        this.element = input;
      }
    };
  }

  setValue(val: number) {
    if (this.element) {
      (this.element as HTMLInputElement).value = val.toString();
    }
    this.emitter.trigger('process');
  }
}