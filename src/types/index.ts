import { ProblemType } from "../constants";

export interface DataStats {
  featureStats: number[];
  numFeatures: number;
  numSamples: number;
  numTarget: number;
  problemType: ProblemType;
}

export interface ModelInfo {
  accuracy: number;
  bestModelName: string;
}

export interface FeatureImportances {
  featureName: string;
  statistical: number;
  tree: number;
}

export interface DataDisplay {
  title: string;
  rows: (string | number)[][];
  columns: string[];
}

export interface PlotData {
  colorsPoints: string[];
  problemType: ProblemType;
  x: number[];
  y: number[];
  xy: { x: number; y: number }[];
}

export interface DataInsights {
  stats: DataStats;
  modelInfo: ModelInfo;
  featureImportances: FeatureImportances[];
  dataDisplay: DataDisplay;
  plotData: PlotData;
}
