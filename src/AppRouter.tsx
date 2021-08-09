import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppRouter: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppRouter;
