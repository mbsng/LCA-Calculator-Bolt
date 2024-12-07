export interface NodeData {
  id?: string;
  data: {
    value?: number;
    efficiency?: number;
    distance?: number;
  };
  position?: [number, number];
}