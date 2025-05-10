import { faker } from '@faker-js/faker';
import { render, screen, waitFor } from '@testing-library/react';
import Navbar from '@/components/custom/Navbar';
import { fetchData } from '@/data/loaders';
import { Category } from '@/types/category';

jest.mock('../../data/loaders');

function generateRichTextEditorMockData(
  isBold: boolean = false,
  isItalic: boolean = false
) {
  return [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: faker.lorem.paragraph(),
          bold: isBold,
          italic: isItalic,
        },
      ],
    },
  ];
}

const mockFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

const mockCategories: Category[] = [
  {
    id: 1,
    slug: 'fiction',
    title: 'Fiction',
    featured: true,
    text: generateRichTextEditorMockData(),
  },
  {
    id: 2,
    slug: 'non-fiction',
    title: 'Non-Fiction',
    featured: true,
    text: generateRichTextEditorMockData(true, false),
  },
  {
    id: 3,
    slug: 'sci-fi',
    title: 'Sci-Fi',
    featured: false,
    text: generateRichTextEditorMockData(false, true),
  },
];

describe('Navbar component', () => {
  it('renders featured categories correctly', async () => {
    render(<Navbar categories={mockCategories} />);

    await waitFor(() => {
      expect(screen.getByText('Fiction')).toBeInTheDocument();
      expect(screen.getByText('Non-Fiction')).toBeInTheDocument();
    });

    expect(screen.queryByText('Sci-Fi')).not.toBeInTheDocument();
    expect(screen.getByText('Books')).toBeInTheDocument();
  });

  it('renders without featured categories', async () => {
    mockFetchData.mockResolvedValue([
      { id: 1, slug: 'sci-fi', title: 'Sci-Fi', featured: false },
    ]);

    render(<Navbar categories={mockCategories} />);

    await waitFor(() => {
      expect(screen.queryByText('Sci-Fi')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Books')).toBeInTheDocument();
  });
});
