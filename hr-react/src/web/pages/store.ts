// import { useState } from 'react';
import create from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer';

const DEFAULT_STATE = {
  yideng: '京程一灯',
  age: 20,
  arr: ['201603'],
};

// const store = create(() => ({ ...DEFAULT_STATE }));
const store = create(
  immer<typeof DEFAULT_STATE>(set => ({
    ...DEFAULT_STATE,
  }))
);

const { getState, setState, subscribe, destroy } = store;

subscribe(state => {
  console.log('state更新了', state.yideng);
});

function changeState() {
  //   console.log('执行成功');
  //hooks if+函数体
  //   setState({
  //     ...DEFAULT_STATE,
  //     yideng: '京程一灯🏮' + Math.random(),
  //   });
  //❌ bad case
  //   setState({...res})
  //   setState({
  //     yideng: '京程一灯',
  //     age: 20,
  //   });
  // store.setState((state) => {
  //   state.yideng = Math.random().toString();
  //   state.age = 10;
  // });

  store.setState(state => {
    state.arr = ['201603'];
  });
  //   setTimeout(() =>{},1000)
}
export { store, changeState, getState };

// function yideng(num) {
//   if (num !== undefined) {
//     useXXX(num);
//   }
//   if (num !== undefined) {
//     useState(num);
//   }
// }

// import produce from 'immer';
// // const DEFAULT_STATE = {
// //   lush: { forest: { contains: { a: 'bear' } } },
// // };
// const store = create<{
//   lush: { forest: { contains: { a: string } } };
//   clearForest: (data: string) => void;
// }>((set) => ({
//   lush: { forest: { contains: { a: 'bear' } } },
//   clearForest: (data: string) =>
//     set(
//       produce((state) => {
//         // console.log('state', data);
//         // state = data;
//         // return data;
//         state.lush.forest.contains.a = data;
//       })
//     ),
// }));
// function changeState() {
//   // ❌ bad case
//   store.setState((state) => {
//     state.lush = { forest: { contains: { a: 'bear' } } };
//   });
// }
// export { store, changeState };

// clearForest: (a:string) => set(produce(state => {
//   state.lush.forest.contains.a = a
// }))
