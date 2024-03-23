export interface MakesModels {
  [make: string]: {
    models: {
      [model: string]: number;
    };
    count: number;
  };
}
