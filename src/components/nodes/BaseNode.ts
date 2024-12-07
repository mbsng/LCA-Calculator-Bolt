import { ClassicPreset } from 'rete';
import { NodeData } from '../../types/node';

export class BaseNode extends ClassicPreset.Node<NodeData> {
  protected calculateEmissions(value: number, factor: number): number {
    return value * factor;
  }

  protected calculateEnergy(value: number, factor: number): number {
    return value * factor;
  }

  protected calculateWaste(value: number, factor: number): number {
    return value * factor;
  }
}