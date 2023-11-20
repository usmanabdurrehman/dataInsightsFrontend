export enum Dataset {
  Prostate = "prostate",
  Heart = "heart",
  StockPrices = "stockprices",
}

export const EXAMPLE_DATASETS = [
  {
    id: Dataset.Heart,
    name: "Heart Dataset",
  },
  {
    id: Dataset.StockPrices,
    name: "Stock Prices Dataset",
  },
  {
    id: Dataset.Prostate,
    name: "Prostate Dataset",
  },
];
