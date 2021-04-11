import { Link } from 'react-router-dom';
import { YouTubeLink } from './TechniqueItem';

interface VideoPageProps {
  youTubeLink: YouTubeLink;
}

export const VideoPage: React.FC<VideoPageProps> = ({youTubeLink}) => {
    return <>
      <Link to="/">{`<-Back to Positions`}</Link>
      <p>{youTubeLink.title}</p>
    </>;
};
