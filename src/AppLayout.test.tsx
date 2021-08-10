import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Routes from 'config/routes';

import mockMatchMedia from 'mocks/matchMedia';

import useAuthentication from 'domain/authentication/useAuthentication';

import AppLayout from 'AppLayout';

jest.mock('domain/authentication/useAuthentication', () => jest.fn());

type TestParams = {
  initialRoute?: string;
  authenticated?: boolean;
};

describe('AppLayout', () => {
  const MOCKED_EMAIL = 'mocked-email@gmail.com';

  const setup = (
    params: TestParams = { initialRoute: '/', authenticated: false }
  ) => {
    const { initialRoute = '/', authenticated = false } = params;

    mockMatchMedia();

    (useAuthentication as jest.Mock).mockImplementation(() => {
      if (!authenticated)
        return {
          authenticated: false,
        };

      return {
        authenticated: true,
        currentUser: {
          email: MOCKED_EMAIL,
        },
      };
    });

    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppLayout></AppLayout>
      </MemoryRouter>
    );
  };

  // In React Ant Design, when a menu item is selected,
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

  test('it should show authentication buttons when there is no authenticated user', async () => {
    setup();

    const loginButton = await screen.findByTitle('Login Button');
    const registerButton = await screen.findByTitle('Register Button');

    expect(loginButton).toBeVisible();
    expect(registerButton).toBeVisible();
  });

  test('it should show profile button when user is authenticated', async () => {
    setup({ authenticated: true });

    const profileButton = await screen.findByTitle('Profile Button');
    expect(profileButton).toBeVisible();

    userEvent.click(profileButton);

    const emailText = await screen.findByText(MOCKED_EMAIL);
    expect(emailText).toBeInTheDocument();
  });
});
