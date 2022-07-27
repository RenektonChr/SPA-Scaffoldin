import { useEffect, useState } from 'react';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
// import { atom, useAtom } from 'jotai';
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '老袁666', // default value (aka initial value)
});
let c = 0;
export const Demo = () => {
  // const textAtom = atom('hello');
  const [txt, setTxt] = useState('测试页面');
  // const text = useRecoilValue(textState);
  const [text, setText] = useRecoilState(textState);
  // const [uppercase] = useAtom(textAtom);
  // setTxt(Math.random().toString());
  console.log('页面渲染🐻', ++c);
  useEffect(() => {}, []);
  return (
    <>
      {/* <h1>{uppercase}</h1> */}
      <h2 onClick={(e) => setText(Math.random().toString())}>{text}</h2>
      <div onClick={() => setTxt(Math.random().toString())}>{txt}</div>
    </>
  );
};
