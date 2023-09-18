export interface ArbitrageLinksParams {
  tipsport: string | undefined;
  fortuna: string | undefined;
  newEvaluation?: boolean;
}

export interface ArbitrageData {
  data: {
    links: string[];
    result: ArbitrageResult[][];
  };
}

export interface ArbitrageResult {
  amount: number;
  name: string;
  type: string;
  profit: number;
  rate: number;
  site: string;
}
