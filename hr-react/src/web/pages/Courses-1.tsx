// import { store, changeState, getState } from './store';

import { store, changeState } from './store';
import create from 'zustand';
const useStore = create(store);

function Courses() {
  console.log('---页面重绘---');
  const { yideng, age, arr } = useStore();
  // const lush = useStore((state) => state.lush);
  // const clearForest = useStore((state) => state.clearForest);
  return (
    <div>
      <h2 onClick={changeState}>
        {/* <h2 onClick={() => clearForest(Math.random().toString())}> */}
        {/* {lush.forest.contains.a} */}
        {yideng}--{age}
        <hr />
        {arr.join(',')}
      </h2>
    </div>
  );
}

export default Courses;
