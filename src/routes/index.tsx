import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function RenderRouter() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);
}
