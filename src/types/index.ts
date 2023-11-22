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
  best_model_name: string;
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
  colors_points: string[];
  problem_type: ProblemType;
  x: number[];
  y: number[];
  xy: { x: number; y: number }[];
}

export interface DataInsights {
  stats: DataStats;
  model_info: ModelInfo;
  featureImportances: FeatureImportances[];
  dataDisplay: DataDisplay;
  plotData: PlotData;
}
