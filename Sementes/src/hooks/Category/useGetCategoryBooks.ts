import {useState} from 'react';
import {CategoryBooks} from '../../interfaces/mainInterface';
import {api, api_key} from '../../services/api';

export const useGetCategoryBooks = () => {
  const [categoriesBooks, setCategoriesBooks] = useState<CategoryBooks>();
  const [categoriesBooksError, setCategoriesBooksError] = useState(false);
  const [categoriesBooksLoading, setCategoriesBooksLoading] = useState(false);

  const getCategoriesBooks = async (kindOfBooks: string) => {
    try {
      setCategoriesBooksLoading(true);
      setCategoriesBooksError(false);

      const reponse = await api.get(
        `/svc/books/v3/lists/current/${kindOfBooks}.json${api_key}`,
      );

      setCategoriesBooks(reponse.data.results);
    } catch (err) {
      setCategoriesBooksError(true);
    } finally {
      setCategoriesBooksLoading(false);
    }
  };

  return {
    categoriesBooks,
    categoriesBooksError,
    categoriesBooksLoading,
    getCategoriesBooks,
  };
};
