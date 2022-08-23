import {useState} from 'react';
import {api, api_key} from '../../services/api';

export const useGetCategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const getCategories = async () => {
    try {
      setCategoriesLoading(true);
      setCategoriesError(false);

      const reponse = await api.get(`/svc/books/v3/lists/names.json${api_key}`);

      setCategories(reponse.data.results);
    } catch (err) {
      setCategoriesError(true);
    } finally {
      setCategoriesLoading(false);
    }
  };

  return {
    categories,
    categoriesError,
    categoriesLoading,
    getCategories,
  };
};
