/**
 * xstate与react的结合
 * ① useEffect 监控xstate的状态改变
 * ② addEventLister 监控xstate的状态改变
 * ③ 使用jotai直接适配xstate
 */
import { useEffect, useCallback } from 'react';
import { atomWithImmer } from 'jotai/immer';
import { toggleService, DemoData } from '@yideng/demos';
import { useAtom } from 'jotai';
// 1.适配普通的promise任务
// 2.启动我们的immer
// 3.状态机的通信 组件外的状态的通信机制
//     [√] 3-1 事件监听
//     [√] 3-2 useEffect 中通过onTransition 和 onTransitionEnd 事件监听
//     [√] 3-3 使用jotai去适配xstate的状态机
const mangaAtomObj = atomWithImmer({
  loading: false,
  result: {} as DemoData,
});
export function useDemo() {
  const [query, setQuery] = useAtom(mangaAtomObj);
  const fn = useCallback(() => {
    toggleService.send('FETCH');
  }, []);
  useEffect(() => {
    toggleService.onTransition((state) => {
      if (state.value === 'loading') {
        setQuery((draft) => {
          draft.loading = true;
        });
      }
      if (state.value === 'success') {
        setQuery((draft) => {
          draft.loading = false;
          draft.result = (state.context as any).user;
        });
      }
    });
  }, []);
  return [query, fn];
}
