import { DemoData, toggleMachine } from '@yideng/demos';
import { atomWithMachine } from 'jotai/xstate';
interface EventObject {
  type: string;
}
const toggleMachineAtom = atomWithMachine<
  unknown,
  EventObject,
  {
    value: 'inactive' | 'active';
    context: unknown;
  }
>(() => toggleMachine);

export { toggleMachineAtom };
