// import { toggleMachineAtom } from '@hooks/useLibs/yideng-jotai';
// import { atom, useAtom } from 'jotai';
// import { atomWithImmer, useImmerAtom } from 'jotai/immer';
// import { memo, useCallback, useEffect } from 'react';
// function Courses() {
//   const [state, send] = useAtom(toggleMachineAtom);
//   const data = state.value.toString();
//   return (
//     <div>
//       <h2 onClick={() => send('TOGGLE')}>{data}</h2>
//       <hr />
//     </div>
//   );
// }

// export default memo(Courses);

import React from 'react';

// import { useLocalStorage } from '@hooks/useLocalStorage';

// import { useTest } from '@hooks/useTest';
// // Usage
// export default function Component() {
//   const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>('darkTheme', true);

//   const toggleTheme = () => {
//     setDarkTheme(prevValue => !prevValue);
//   };

//   const [fn, lastCallId] = useTest();
//   return (
//     // <button onClick={toggleTheme}>
//     //   {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
//     // </button>
//     <h2 onClick={fn}>{lastCallId.current}</h2>
//   );
// }
type A = {
  p: string;
};

/**
 * 1.init satet with default value
 * 2.固定的值 type a
 */
const a = { str: 25 };

//typeof B = typeof a & A;

const initialState = { count: 0 };
type ACTIONTYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - Number(action.payload) };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
    </>
  );
}
export default Counter;
