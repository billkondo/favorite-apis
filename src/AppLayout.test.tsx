import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Routes from 'config/routes';

import AppLayout from 'AppLayout';

describe('AppLayout', () => {
  const setup = (params = { initialRoute: '/' }) => {
    const { initialRoute } = params;

    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppLayout></AppLayout>
      </MemoryRouter>
    );
  };

  // In React And Design, when a menu item is selected,
  // it has the class 'ant-menu-item-selected'
  const elementHasSelectedClass = (element: HTMLElement) => {
    const classes = element.className.split(' ');

    const selectedClass = classes.find(
      (className) => className === 'ant-menu-item-selected'
    );

    return !!selectedClass;
  };

  test('api item menu should be selected when api route is matched', async () => {
    setup();

    const apiItem = await waitFor(() => screen.findByTitle('APIs'));
    expect(apiItem).toBeVisible();
    expect(elementHasSelectedClass(apiItem)).toBe(true);

    const favoritesItem = await waitFor(() => screen.findByTitle('Favorites'));
    expect(favoritesItem).toBeVisible();
    expect(elementHasSelectedClass(favoritesItem)).toBe(false);
  });

  test('favorites item menu should be selected when favorites route is matched', async () => {
    setup({
      initialRoute: Routes.FAVORITES,
    });

    const apiItem = await waitFor(() => screen.findByTitle('APIs'));
    expect(apiItem).toBeVisible();
    expect(elementHasSelectedClass(apiItem)).toBe(false);

    const favoritesItem = await waitFor(() => screen.findByTitle('Favorites'));
    expect(favoritesItem).toBeVisible();
    expect(elementHasSelectedClass(favoritesItem)).toBe(true);
  });

  test('none of the menu items should be selected when no route is matched', async () => {
    setup({
      initialRoute: '/this_route_does_not_exist',
    });

    const apiItem = await waitFor(() => screen.findByTitle('APIs'));
    expect(apiItem).toBeVisible();
    expect(elementHasSelectedClass(apiItem)).toBe(false);

    const favoritesItem = await waitFor(() => screen.findByTitle('Favorites'));
    expect(favoritesItem).toBeVisible();
    expect(elementHasSelectedClass(favoritesItem)).toBe(false);
  });
});
