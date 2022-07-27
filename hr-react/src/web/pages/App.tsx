import YdHeader from '@components/common/YdHeader';
import { useRoutes } from 'react-router-dom';
import routes from '../routers';
const App = (): JSX.Element => {
  const routing = useRoutes(routes);

  return (
    <div className="container">
      <YdHeader />
      {routing}
    </div>
  );
};
export default App;
