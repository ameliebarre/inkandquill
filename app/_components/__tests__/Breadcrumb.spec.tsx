import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import Breadcrumb from '../Breadcrumb';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn() as jest.Mock,
}));

describe('Breadcrumb Component', () => {
  it('renders only Home when on root path', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Breadcrumb />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
  });

  it('renders breadcrumb for a single path', () => {
    (usePathname as jest.Mock).mockReturnValue('/section');

    render(<Breadcrumb />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Section')).toBeInTheDocument();
  });

  it('renders breadcrumb for nested paths', () => {
    (usePathname as jest.Mock).mockReturnValue('/section/subsection');

    render(<Breadcrumb />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Section')).toHaveAttribute('href', '/section');
    expect(screen.getByText('Subsection')).toBeInTheDocument();
    expect(screen.getByText('Subsection')).toHaveClass('text-amber-400');
  });
});
