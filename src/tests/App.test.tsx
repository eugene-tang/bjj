import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Position } from '../components/PositionsChart';
import App from '../App';

describe('App', () => {
  it('navigates to the video page when link clicked', () => {
    const positions: Position[] = [
      {
        positionName: 'Take-down Techniques',
        techniques: [{
          techniqueName: 'Ogoshi - Hip Throw',
          urls: [
            { title: 'Hip Throw Video 1', videoId: '9bZkp7q19f0' },
            { title: 'Hip Throw Video 2', videoId: 'UOABajHkcsA' },
          ]
        }]
      }
    ];

    render(<App positions={positions} />);

    userEvent.click(screen.getByText(/Ogoshi - Hip Throw/i));
    userEvent.click(screen.getByText(/Hip Throw Video 1/i));

    expect(screen.getByText(/Hip Throw Video 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ogoshi - Hip Throw/i)).not.toBeInTheDocument();
  });
});
