import YdHeader from '@components/common/YdHeader';
import { Outlet } from 'react-router-dom';

const MainLayout = (): JSX.Element => {
  return (
    <section>
      <Outlet />
    </section>
  );
};
export default MainLayout;
