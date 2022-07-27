import { atom, useAtom } from 'jotai';
import { atomWithImmer, useImmerAtom } from 'jotai/immer';
import { memo, useCallback, useEffect } from 'react';
// const mangaAtomObj = atom({ str: '状态测试' });
const mangaAtomObj = atomWithImmer({ str: '状态测试' });
function Courses() {
  console.log('rerender...');
  const [data, setData] = useAtom(mangaAtomObj);
  // const [data, setData] = useAtom(mangaAtom);
  const fn = useCallback(() => {
    setData(draft => {
      draft.str = '状态测试';
      //   return draft;
    });
    // setData({
    //   str: '状态测试',
    // });
  }, []);
  useEffect(() => {
    console.log('🐻', data.str);
  }, [data]);
  return (
    <div>
      <h2 onClick={fn}>{data.str}</h2>
      <hr />
    </div>
  );
}

export default memo(Courses);
