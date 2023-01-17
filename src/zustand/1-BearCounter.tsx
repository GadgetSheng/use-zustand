import { create } from 'zustand';

interface BearState {
  bears: number,
  increase: () => void,
  removeAll: () => void
}
const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 })),
  removeAll: () => set({ bears: 0 })
}))

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <>
    <h1> 1. create store</h1>
    <h2> {bears} around here ...</h2>
  </>
}

function BearControls() {
  const increaseAction = useBearStore(state => state.increase);
  const clearAction = useBearStore(state => state.removeAll);
  return <>
    <button onClick={increaseAction}>one up</button>
    <button onClick={clearAction}>reset**</button>
  </>
}

export {
  useBearStore,
  BearCounter,
  BearControls
}