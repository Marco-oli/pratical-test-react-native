export interface CategoryProps {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
}

export interface BookProps {
  publisher: string;
  author: string;
  title: string;
  description: string;
  price: string;
  book_image: string;
}

export interface CategoryBooks {
  bestsellers_date: string;
  books: BookProps[];
  corrections: [];
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  next_published_date: string;
  normal_list_ends_at: number;
  previous_published_date: string;
  published_date: string;
  published_date_description: string;
  updated: string;
}
