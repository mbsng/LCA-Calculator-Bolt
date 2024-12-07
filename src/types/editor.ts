export interface EditorNode {
  id: string;
  name: string;
  data: {
    value: number;
    unit: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export interface Connection {
  id: string;
  source: string;
  target: string;
}

export interface CalculationResult {
  emissions: number;
  energy: number;
  waste: number;
}