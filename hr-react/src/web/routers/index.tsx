import Loading from '@components/Loading';
import MainLayout from '@layouts/MainLayout';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('@pages/Home'));
//import Home from '@pages/Home';
const Courses = lazy(() => import('@pages/Courses'));
import { RouteObject } from 'react-router-dom';
const Routes: RouteObject[] = [];
const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: '/courses',
      element: <Courses />,
      // children: [
      //   { index: true, element: <CoursesIndex /> },
      //   { path: '/courses/:id', element: <Course /> },
      // ],
    },
    // { path: '*', element: <NoMatch /> },
  ],
};

Routes.push(mainRoutes);
export default Routes;
