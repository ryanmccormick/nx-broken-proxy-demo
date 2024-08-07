import { createBrowserRouter } from 'react-router-dom';

import { AppContainer } from './layout/AppContainer';
import { Greeting } from './pages/Greeting';

export const appRouter = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: AppContainer,
    children: [{ index: true, Component: Greeting }],
  },
]);
