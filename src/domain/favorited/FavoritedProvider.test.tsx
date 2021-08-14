import { FC } from 'react';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useUseCases from 'domain/usecases/useUseCases';

import delayed from 'utils/delayed';

import FavoritedProvider from './FavoritedProvider';
import useFavorited from './useFavorited';

jest.mock('domain/usecases/useUseCases');
jest.mock('utils/delayed');

describe('FavoritedProvider', () => {
  const setup = () => {
    (delayed as jest.Mock).mockImplementation(async (x: any) => x);

    const favoriteItemUseCaseMock = jest.fn();
    favoriteItemUseCaseMock.mockImplementation(() => true);

    (useUseCases as jest.Mock).mockImplementation(() => ({
      favoritedUseCases: {
        favoriteItemUseCase: favoriteItemUseCaseMock,
      },
    }));

    const { result } = renderHook(() => useFavorited(), { wrapper });

    return { result, favoriteItemUseCaseMock };
  };

  const wrapper: FC = ({ children }) => {
    return <FavoritedProvider>{children}</FavoritedProvider>;
  };

  test('it should favorite multiple items at the same time', async () => {
    const { result, favoriteItemUseCaseMock } = setup();

    result.current.favoriteItem({ id: '1', key: '1' });
    result.current.favoriteItem({ id: '2', key: '2' });
    result.current.favoriteItem({ id: '3', key: '3' });

    await waitFor(() => expect(favoriteItemUseCaseMock).toBeCalledTimes(3));

    expect(result.current.favoritedList).toHaveLength(3);
  });
});
