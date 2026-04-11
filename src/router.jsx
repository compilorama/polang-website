import { createBrowserRouter } from 'react-router';
import Home from '@src/views/home/home';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
]);

export default router;
