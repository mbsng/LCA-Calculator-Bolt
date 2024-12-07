export interface NodeData {
  label: string;
  type: 'resource' | 'production' | 'transport' | 'usage' | 'disposal';
  values: {
    [key: string]: number;
  };
  units: {
    [key: string]: string;
  };
}

export interface EdgeData {
  label: string;
  formula: string;
}