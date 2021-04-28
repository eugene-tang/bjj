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
          <iframe
            title={youTubeLink.title}
            className="video"
            src={`https://www.youtube.com/embed/${youTubeLink.videoId}?autoplay=1`}
            allow="autoplay"
          >
          </iframe>
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
