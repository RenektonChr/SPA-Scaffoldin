import { atom, useAtom } from 'jotai';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const textAtom = atom('hello');
const YdHeader: FC = () => {
  const [uppercase] = useAtom(textAtom);

  // const [num, setNum] = useState(0);
  // const init = useCallback(() => {}, []);
  // console.log('uppercase: ', uppercase);
  // const [data, setData] = useState({ a: 'Home' });
  //轻微的变化
  // console.log('组件初始化🐻...', Math.random());
  // const fn = useCallback(() => {
  //   console.log('智慧');
  // }, []);
  //复杂一点 GC
  // useEffect(() => {
  //   // const init = () => {
  //   //   //wasm 计算一个值回来
  //   //   console.log('🐻🐻🐻🐻🐻...', Math.random());
  //   // };
  //   // init();
  //   // setData({ a: 'Home' });
  //   fn();
  //   console.log('uppercase: ', uppercase);
  //   console.log('🐻', process.env.DB_HOST);
  // }, []);
  return (
    <>
      <div>
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
      </div>
    </>
  );
};
YdHeader.whyDidYouRender = true;
export default memo(YdHeader);
