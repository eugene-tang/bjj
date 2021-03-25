import './PositionsChart.css';

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
    {positions.map(position => <li className="position" key={position.positionName}>
      <p className="positionName">{position.positionName}</p>
      <ul className="techniques">
        {position.techniques.map(technique => <li key={technique.techniqueName}>{technique.techniqueName}</li>)}
      </ul>
    </li>)}
  </ul>;