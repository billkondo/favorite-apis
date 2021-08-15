import { useMemo } from 'react';

import useAuthentication from 'domain/authentication/useAuthentication';
import useFavorited from 'domain/favorited/useFavorited';

import useSubmit from 'utils/useSubmit';

const useFavoriteButton = (id: string, item: any) => {
  const { isFavorited, favoriteItem, done } = useFavorited();
  const { authenticated } = useAuthentication();

  const favorited = useMemo(() => isFavorited(id), [id, isFavorited]);

  const { submit, loading } = useSubmit(async () => {
    await favoriteItem(item);
  });

  return {
    favorited,
    loading,
    favorite: submit,
    visible: authenticated && done,
  };
};

export default useFavoriteButton;
