import { render, screen } from '@testing-library/react';
import { PositionsChart } from './PositionsChart';

describe('PositionsChart', () => {
  it('displays all BJJ positions given to it', () => {
    const positions = ['Mount', 'Side Control', 'Back Control'];
    render(<PositionsChart positions={positions} />);
    const linkElement1 = screen.getByText(/Mount/i);
    expect(linkElement1).toBeInTheDocument();

    const linkElement2 = screen.getByText(/Side Control/i);
    expect(linkElement2).toBeInTheDocument();

    const linkElement3 = screen.getByText(/Back Control/i);
    expect(linkElement3).toBeInTheDocument();
  });
});
