import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';

export interface YouTubeLink {
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
  setSelectedVideo: Dispatch<YouTubeLink>;
}

export const TechniqueItem: React.FC<TechniqueProps> = ({techniqueProps, setSelectedVideo}) => {
  const [showLinks, setShowLinks] = React.useState(false);

  return <li className="technique" onClick={() => setShowLinks(!showLinks)}>
    {techniqueProps.techniqueName}
    {showLinks &&
      <ul>
        {techniqueProps.urls.map(url =>
          <Link to={`video?v=${url.videoId}`} key={url.videoId} onClick={() => setSelectedVideo(url)}>
            <div>{url.title}</div>
          </Link>)}
      </ul>}
  </li>;
}
