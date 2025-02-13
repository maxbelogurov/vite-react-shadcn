import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import MainLayout from '@/layots/MainLayout';

import HomePage from '@/pages/HomePage';
import DemoPage from '@/pages/DemoPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'demo',
        element: <DemoPage/>
      }
    ]
  },
]);

export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}
