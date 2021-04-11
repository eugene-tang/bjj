import './PositionsChart.css';
import { Technique, TechniqueItem } from './TechniqueItem';

export interface Position {
  positionName: string;
  techniques: Technique[];
}

export interface PositionsChartProps {
  positions: Position[];
};

export const PositionsChart: React.FC<PositionsChartProps> = ({positions}) =>
  <>
    <h1>Positions Chart</h1>
    <ul className="positions">
      {positions.map(position =>
        <li className="position" key={position.positionName}>
        <p className="positionName">{position.positionName}</p>
        <ul className="techniques">
          {position.techniques.map(technique =>
            <TechniqueItem techniqueProps={technique} key={technique.techniqueName} />)}
        </ul>
      </li>)}
    </ul>
  </>;
