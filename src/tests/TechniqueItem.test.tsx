import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Technique, TechniqueItem } from '../components/TechniqueItem';

describe('TechniqueItem', () => {
  it('displays all links under a technique when technique expanded', () => {
    const technique: Technique = {
      techniqueName: 'Ogoshi - Hip Throw',
      urls: [
        { title: 'Hip Throw Video 1', videoId: '9bZkp7q19f0' },
        { title: 'Hip Throw Video 2', videoId: 'UOABajHkcsA' },
      ]
    }

    render(<TechniqueItem techniqueProps={technique} />);

    userEvent.click(screen.getByText(/Ogoshi - Hip Throw/i));
    expect(screen.getByText(/Hip Throw Video 1/i)).toBeInTheDocument();
  });
});
