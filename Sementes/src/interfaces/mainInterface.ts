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
