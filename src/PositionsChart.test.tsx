import { render, screen } from '@testing-library/react';
import { PositionsChart } from './PositionsChart';

describe('PositionsChart', () => {
  it('displays all BJJ positions given to it', () => {
    // const positions: string[] = [
    //   'Take-down Techniques',
    //   'Mount',
    //   'Back Control',
    //   'Positional Control',
    //   'Escapes',
    //   'Side Control',
    //   'Closed Guard',
    //   'Open Guard',
    //   'Guard Passing',
    //   'Half Guard',
    // ];

    const positions = [
      { positionName: 'Take-down Techniques', technique: [] },
      { positionName: 'Mount', technique: [] },
      { positionName: 'Back Control', technique: [] },
      { positionName: 'Positional Control', technique: [] },
      { positionName: 'Escapes', technique: [] },
      { positionName: 'Side Control', technique: [] },
      { positionName: 'Closed Guard', technique: [] },
      { positionName: 'Open Guard', technique: [] },
      { positionName: 'Guard Passing', technique: [] },
      { positionName: 'Half Guard', technique: [] },
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
});
