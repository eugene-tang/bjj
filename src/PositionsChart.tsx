interface Technique {
  techniqueName: string;
  grade?: string;
}

export interface Position {
  positionName: string;
  techniques: Technique[];
}

interface PositionsChartProps {
  positions: Position[];
};

export const PositionsChart: React.FC<PositionsChartProps> = ({positions}) =>
  <ul>
    {positions.map(position => <li key={position.positionName}>
      {position.positionName}
      <br></br>
      <ul>
        {position.techniques.map(technique => <li key={technique.techniqueName}>{technique.techniqueName}</li>)}
      </ul>
    </li>)}
  </ul>;