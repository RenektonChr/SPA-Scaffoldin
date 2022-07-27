import { useImmer } from '@hooks/useImmer';
import { useTest } from '@hooks/useTest';
import { atom, useAtom } from 'jotai';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
const textAtom = atom('hello');

function Home() {
  console.log('rerednder....');
  // const [fn, lastCallId] = useTest();
  // const lastCallId = useRef(0);
  // const fn = () => {
  //   console.log('执行到位');
  //   lastCallId.current = lastCallId.current + 1;
  // };
  // const getData = () => {
  //   console.log(lastCallId.current);
  // };
  // return (
  //   <div>
  //     <h1 onClick={fn}>Home -- {lastCallId.current}</h1>
  //     <h1 onClick={getData}>获取数据</h1>
  //   </div>
  // );
  // const [text, setText] = useAtom(textAtom);
  const [uppercase, setUppercase] = useImmer({ a: 123 });
  // const handleChange = (e: any) => setText(e.target.value);
  const handleChange = useCallback(() => {
    // console.log('xxx');
    // setText('hello world');
    setUppercase(draf => {
      draf.a = 1234;
    });
    // setUppercase({ a: 123 });
  }, [setUppercase]);
  //做很多事
  // useEffect(() => {

  // }, []);
  // console.log('rerender...');
  // return <input type="button" value={uppercase.a} onClick={handleChange} />;
  // const [txt, setTxt] = useState({ a: 123 });
  // const handleChange = useCallback(() => {
  //   setTxt({ a: 123 });
  // }, [setTxt]);
  return <input type="button" value={uppercase.a} onClick={handleChange} />;
}
Home.whyDidYouRender = true;
export default memo(Home);
