interface Technique {
  techniqueName: string;
  grade?: string;
}

export interface Position {
  positionName: string;
  technique: Technique[];
}

interface PositionsChartProps {
  positions: Position[];
};

export const PositionsChart: React.FC<PositionsChartProps> = ({positions}) =>
  <>{positions.map(position => <li key={position.positionName}>{position.positionName}</li>)}</>;