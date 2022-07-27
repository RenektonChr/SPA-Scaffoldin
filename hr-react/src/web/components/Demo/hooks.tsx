import { useAsyncFn } from './hooks/useAsyncFn';
import { fetchCuteAnimals } from '@yideng/demos';

export const Demo = () => {
  const [state, doFetch] = useAsyncFn(async () => {
    const normaTask = fetchCuteAnimals();
    return normaTask;
  }, []);
  console.log('state: ', state);
  return (
    <div>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : (
        <div>Value: {state.value?.data}</div>
      )}
      <button onClick={() => doFetch()}>Start loading</button>
    </div>
  );
};
