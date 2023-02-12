import { create } from 'zustand';
const useStore = create(set => ({
  nuts: 0,
  honey: 0,
  setNuts: (count: number) => set((state: any) => state.nuts = count),
  setHoney: (little: number) => set((state: any) => state.honey = little)
}))

function WholeStore() {
  const state = useStore();
  return <>
    <h1>2. Whole Store</h1>
    <h2>
      {JSON.stringify(state)}
    </h2>
  </>
}

export {
  WholeStore
}