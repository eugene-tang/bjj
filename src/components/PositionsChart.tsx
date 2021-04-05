import React from 'react';
import './PositionsChart.css';
import {Technique, TechniqueItem} from './TechniqueItem';

export interface Position {
  positionName: string;
  techniques: Technique[];
}

interface PositionsChartProps {
  positions: Position[];
};

export const PositionsChart: React.FC<PositionsChartProps> = ({positions}) =>
  <ul className="positions">
    {positions.map(position =>
    <li className="position" key={position.positionName}>
      <p className="positionName">{position.positionName}</p>
      <ul className="techniques">
        {position.techniques.map(technique => <TechniqueItem techniqueProps={technique} key={technique.techniqueName} />)}
      </ul>
    </li>)}
  </ul>;