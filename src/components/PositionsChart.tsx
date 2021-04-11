import { Dispatch } from 'react';
import './PositionsChart.css';
import { Technique, TechniqueItem, YouTubeLink } from './TechniqueItem';

export interface Position {
  positionName: string;
  techniques: Technique[];
}

export interface PositionsChartProps {
  positions: Position[];
  setSelectedVideo: Dispatch<YouTubeLink>;
};

export const PositionsChart: React.FC<PositionsChartProps> = ({positions, setSelectedVideo}) =>
  <>
    <h1>Positions Chart</h1>
    <ul className="positions">
      {positions.map(position =>
        <li className="position" key={position.positionName}>
        <p className="positionName">{position.positionName}</p>
        <ul className="techniques">
          {position.techniques.map(technique =>
            <TechniqueItem techniqueProps={technique} key={technique.techniqueName} setSelectedVideo={setSelectedVideo} />)}
        </ul>
      </li>)}
    </ul>
  </>;
