interface PositionsChartProps {
  positions: string[];
};

export const PositionsChart: React.FC<PositionsChartProps> = ({positions}) =>
  <>{positions.map(position => <li key={position}>{position}</li>)}</>;