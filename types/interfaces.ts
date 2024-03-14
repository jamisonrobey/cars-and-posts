export interface InterfaceMakesAndModels {
  [key: string]: {
    models: string[];
    count: number;
  };
}

export interface InterfaceSelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}
