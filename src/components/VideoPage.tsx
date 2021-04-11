import { Link } from 'react-router-dom';
import { YouTubeLink } from './TechniqueItem';
import './VideoPage.css';

interface VideoPageProps {
  youTubeLink: YouTubeLink;
}

export const VideoPage: React.FC<VideoPageProps> = ({youTubeLink}) => {
    return <>
      <Link to="/">{`<-Back to Positions`}</Link>
      <div className="videoPage">
        <div className="videoContainer">
          <div className="video"></div>
          <h1>{youTubeLink.title}</h1>
        </div>
        <div className="videoSuggestionsContainer">
          <div className="videoSuggestion"></div>
          <div className="videoSuggestion"></div>
          <div className="videoSuggestion"></div>
          <div className="videoSuggestion"></div>
        </div>
      </div>
    </>;
};
