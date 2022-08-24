import {useState} from 'react';
import {BookProps} from '../../interfaces/mainInterface';
import {api, api_key} from '../../services/api';

export const useGetCollections = () => {
  const [collections, setCollections] = useState<BookProps[]>();
  const [collectionsError, setCollectionsError] = useState(false);
  const [collectionsLoading, setCollectionsLoading] = useState(false);

  const getCollections = async () => {
    try {
      setCollectionsLoading(true);
      setCollectionsError(false);

      const reponse = await api.get(
        `/svc/books/v3/lists/overview.json${api_key}`,
      );

      setCollections(reponse.data.results.lists[0].books);
    } catch (err) {
      setCollectionsError(true);
    } finally {
      setCollectionsLoading(false);
    }
  };

  return {
    collections,
    collectionsError,
    collectionsLoading,
    getCollections,
  };
};
