import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "../Navbar";
import { fetchDataFromStrapi } from "../../../utils/strapi.utils";
import { Category } from "../../../types/category";

jest.mock("../../../utils/strapi.utils");

const mockedFetchDataFromStrapi = fetchDataFromStrapi as jest.MockedFunction<
  typeof fetchDataFromStrapi
>;

const mockCategories: Category[] = [
  { id: 1, slug: "fiction", title: "Fiction", featured: true },
  { id: 2, slug: "non-fiction", title: "Non-Fiction", featured: true },
  { id: 3, slug: "sci-fi", title: "Sci-Fi", featured: false },
];

describe("Navbar component", () => {
  it("renders featured categories correctly", async () => {
    render(<Navbar categories={mockCategories} />);

    // Wait for the categories to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText("Fiction")).toBeInTheDocument();
      expect(screen.getByText("Non-Fiction")).toBeInTheDocument();
    });

    expect(screen.queryByText("Sci-Fi")).not.toBeInTheDocument();
    expect(screen.getByText("Books")).toBeInTheDocument();
  });

  it("renders without featured categories", async () => {
    mockedFetchDataFromStrapi.mockResolvedValue([
      { id: 1, slug: "sci-fi", title: "Sci-Fi", featured: false },
    ]);

    render(<Navbar categories={mockCategories} />);

    await waitFor(() => {
      expect(screen.queryByText("Sci-Fi")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Books")).toBeInTheDocument();
  });
});
