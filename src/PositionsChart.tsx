import React from 'react';
import './PositionsChart.css';

interface YouTubeLink {
  title: string;
  videoId: string;
}

interface Technique {
  techniqueName: string;
  grade?: string;
  urls: YouTubeLink[];
}

export interface Position {
  positionName: string;
  techniques: Technique[];
}

interface TechniqueProps {
  techniqueProps: Technique;
}

interface PositionsChartProps {
  positions: Position[];
};

const Technique: React.FC<TechniqueProps> = ({techniqueProps}) => {
  const [showLinks, setShowLinks]= React.useState(false);

  return <li className="technique">
    <p onClick={() => setShowLinks(!showLinks)}>{techniqueProps.techniqueName}</p>
    {showLinks && <ul>{techniqueProps.urls.map(url => <li key={url.videoId}>{url.title}</li>)}</ul>}
  </li>;
}

export const PositionsChart: React.FC<PositionsChartProps> = ({positions}) =>
  <ul className="positions">
    {positions.map(position =>
    <li className="position" key={position.positionName}>
      <p className="positionName">{position.positionName}</p>
      <ul className="techniques">
        {position.techniques.map(technique => <Technique techniqueProps={technique} key={technique.techniqueName} />)}
      </ul>
    </li>)}
  </ul>;