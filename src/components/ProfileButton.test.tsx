import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AppRouter from 'AppRouter';

import ProfileButton from './ProfileButton';

describe('ProfileButton', () => {
  const mockedEmail = 'mocked-email@gmail.com';

  const setup = (email = mockedEmail) => {
    render(
      <AppRouter>
        <ProfileButton email={email}></ProfileButton>
      </AppRouter>
    );
  };

  test('it should render button', async () => {
    setup();

    const profileButton = await screen.findByTitle('Profile Button');
    expect(profileButton).toBeVisible();
  });

  test('it should show logout link and user email when profile button is clicked', async () => {
    setup();

    const profileButton = await screen.findByTitle('Profile Button');
    userEvent.click(profileButton);

    const emailText = await screen.findByTitle('User Email');
    await waitFor(() => expect(emailText).toBeInTheDocument());

    const logoutLink = await screen.findByTitle('Logout Link');
    await waitFor(() => expect(logoutLink).toBeInTheDocument());
  });
});
