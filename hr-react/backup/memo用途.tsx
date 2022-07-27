// import { useRoutes } from 'react-router-dom';
// import routes from '../routers';
// const App = (): JSX.Element => {
//   const routing = useRoutes(routes);
//   return <>{routing}</>;
// };
// export default App;
import { memo, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom';
import Home from './Home';

export default function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/courses',
          element: <Courses />,
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return (
    <div>
      <h1>Route Objects Example</h1>
      {element}
    </div>
  );
}
const YDheader = () => {
  console.log('home渲染');
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>
  );
};
function MainLayout() {
  return (
    <div>
      <YDheader />
      <hr />
      <Outlet />
    </div>
  );
}
const Loading = () => {
  return <>loading....</>;
};
const Layout = () => <MainLayout />;
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
