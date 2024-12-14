export interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
