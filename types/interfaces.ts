export interface MakesAndModels {
  [key: string]: {
    models: string[];
    count: number;
  };
}

export interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}
