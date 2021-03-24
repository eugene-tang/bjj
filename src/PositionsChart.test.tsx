import { render, screen } from '@testing-library/react';
import { PositionsChart, Position } from './PositionsChart';

describe('PositionsChart', () => {
  it('displays all BJJ positions given to it', () => {
    const positions: Position[] = [
      { positionName: 'Take-down Techniques', techniques: [] },
      { positionName: 'Mount', techniques: [] },
      { positionName: 'Back Control', techniques: [] },
      { positionName: 'Positional Control', techniques: [] },
      { positionName: 'Escapes', techniques: [] },
      { positionName: 'Side Control', techniques: [] },
      { positionName: 'Closed Guard', techniques: [] },
      { positionName: 'Open Guard', techniques: [] },
      { positionName: 'Guard Passing', techniques: [] },
      { positionName: 'Half Guard', techniques: [] },
    ];

    render(<PositionsChart positions={positions} />);

    expect(screen.getByText(/Take-down Techniques/i)).toBeInTheDocument();
    expect(screen.getByText(/Mount/i)).toBeInTheDocument();
    expect(screen.getByText(/Back Control/i)).toBeInTheDocument();
    expect(screen.getByText(/Positional Control/i)).toBeInTheDocument();
    expect(screen.getByText(/Escapes/i)).toBeInTheDocument();
    expect(screen.getByText(/Side Control/i)).toBeInTheDocument();
    expect(screen.getByText(/Closed Guard/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Guard/i)).toBeInTheDocument();
    expect(screen.getByText(/Guard Passing/i)).toBeInTheDocument();
    expect(screen.getByText(/Half Guard/i)).toBeInTheDocument();
  });

  it('displays all BJJ techniques under each position', () => {
    const positionsWithTechniques: Position[] = [
      {
        positionName: 'Take-down Techniques',
        techniques: [
          { techniqueName: 'Ogoshi - Hip Throw' },
          { techniqueName: 'Kosoto Gake - Outside Trip' },
        ],
      },
      {
        positionName: 'Mount',
        techniques: [
          { techniqueName: 'Americana - Keylock' },
        ]
      },
      { positionName: 'Back Control', techniques: [] },
    ];

    render(<PositionsChart positions={positionsWithTechniques} />);

    expect(screen.getByText(/Ogoshi - Hip Throw/i)).toBeInTheDocument();
    expect(screen.getByText(/Kosoto Gake - Outside Trip/i)).toBeInTheDocument();
    expect(screen.getByText(/Americana - Keylock/i)).toBeInTheDocument();
  });
});
