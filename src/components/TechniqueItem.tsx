import React from 'react';

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
    {showLinks && <ul>{techniqueProps.urls.map(url => <li key={url.videoId}>{url.title}</li>)}</ul>}
  </li>;
}
