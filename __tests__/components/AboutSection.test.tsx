import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../../components/AboutSection';

describe('AboutSection', () => {
  it('renders without crashing', () => {
    const { container } = render(<AboutSection />);
    expect(container).toBeTruthy();
  });
});
