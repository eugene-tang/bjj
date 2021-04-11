import React from 'react';
import { Link } from 'react-router-dom';

interface YouTubeLink {
  title: string;
  videoId: string;
}

export interface Technique {
  techniqueName: string;
  grade?: string;
  urls: YouTubeLink[];
}

interface TechniqueProps {
  techniqueProps: Technique;
}

export const TechniqueItem: React.FC<TechniqueProps> = ({techniqueProps}) => {
  const [showLinks, setShowLinks] = React.useState(false);

  return <li className="technique" onClick={() => setShowLinks(!showLinks)}>
    {techniqueProps.techniqueName}
    {showLinks &&
      <ul>
        {techniqueProps.urls.map(url =>
          <Link to={`video?v=${url.videoId}`} key={url.videoId}>
            <div>{url.title}</div>
          </Link>)}
      </ul>}
  </li>;
}
