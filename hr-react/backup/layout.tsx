import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages (Dashboard)</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

// function CoursesIndex() {
//   return (
//     <div>
//       <p>Please choose a course:</p>

//       <nav>
//         <ul>
//           <li>
//             <Link to="react-fundamentals">React Fundamentals</Link>
//           </li>
//           <li>
//             <Link to="advanced-react">Advanced React</Link>
//           </li>
//           <li>
//             <Link to="react-router">React Router</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
// function Course() {
//   // let { id } = useParams<'id'>();
//   return (
//     <div>
//       <p>This is a great course. You're gonna love it!</p>

//       <Link to="/courses">See all courses</Link>
//     </div>
//   );
// }
// const mainRoutes = {
//   path: '/',
//   element: <Layout />,
//   children: [
//     { index: true, element: <Home /> },
//     {
//       path: '/courses',
//       element: <Courses />,
//       children: [
//         { index: true, element: <CoursesIndex /> },
//         { path: '/courses/:id', element: <Course /> },
//       ],
//     },
//     { path: '*', element: <NoMatch /> },
//   ],
// };

// Routes.push(mainRoutes);
// export default Routes;
