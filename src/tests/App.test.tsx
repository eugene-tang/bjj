import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Position } from '../components/PositionsChart';
import { Routes } from '../App';

describe('Navigation', () => {
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

  it('navigates to the video page when link clicked', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes positions={positions} />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText(/Ogoshi - Hip Throw/i));
    userEvent.click(screen.getByText(/Hip Throw Video 2/i));

    expect(screen.getByText(/Hip Throw Video 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ogoshi - Hip Throw/i)).not.toBeInTheDocument();
  });

  it('navigates back to the home page when back button clicked', () => {
    render(
      <MemoryRouter initialEntries={["/video"]}>
        <Routes positions={positions} />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText(/<-Back to Positions/i));

    expect(screen.getByText(/Positions Chart/i)).toBeInTheDocument();
  });
});
