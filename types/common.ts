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

export interface MetaData<T> {
  data: T;
  meta: Meta;
}

export interface RichTextChild {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
}

export interface RichTextBlock {
  type: string;
  children: Array<RichTextChild>;
}
