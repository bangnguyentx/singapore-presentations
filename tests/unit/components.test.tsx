typescript
import { render, screen } from '@testing-library/react';
import Slide from '@/components/Slide';
import { slides } from '@/data/slides';

describe('Slide Component', () => {
  it('renders slide title', () => {
    render(<Slide slide={slides[0]} isPresenterMode={false} isPaused={false} />);
    expect(screen.getByText(slides[0].title)).toBeInTheDocument();
  });

  it('displays Vietnamese overlay', () => {
    render(<Slide slide={slides[0]} isPresenterMode={false} isPaused={false} />);
    expect(screen.getByText(slides[0].titleVi)).toBeInTheDocument();
  });
});
