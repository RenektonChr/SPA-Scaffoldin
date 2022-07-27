import { useImmer } from '@hooks/useImmer';
import { atom, useAtom } from 'jotai';
import { atomWithImmer, useImmerAtom } from 'jotai/immer';
import { memo, useCallback, useEffect, useState } from 'react';

const mangaAtom = atom({ str: '状态测试' });

const mangaAtomObj = atomWithImmer({ str: '状态测试' });
function Courses() {
  //   const [data, setData] = useState({ str: '状态测试' });
  const [data, setData] = useImmer({ str: '状态测试' });
  console.log('rerender...');
  //   const [data, setData] = useAtom(mangaAtomObj);
  // const [data, setData] = useAtom(mangaAtom);
  //   function becomeRicher() {
  //     setData((draft) => {
  //       draft.str = '状态测试';
  //     });
  //   }
  const fn = useCallback(() => {
    setData((draft) => {
      draft.str = '状态测试';
      //   return draft;
    });
    // setData({ str: '状态测试' });
  }, []);
  //   useEffect(() => {
  //     console.log('rerender...', data.str);
  //   }, [data.str]);
  return (
    <div>
      <h2 onClick={fn}>{data.str}</h2>
      <hr />
    </div>
  );
}

export default memo(Courses);

//recolil zustand jotai useState({}) 撕裂
// ([] Symbol.iterator)()
