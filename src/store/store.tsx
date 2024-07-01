import * as React from 'react'
import { create } from 'zustand'

const useStore: any = create((set: any) => ({
  count: 0,
  increase: () => set((state: any) => ({ count: state.count + 1 })),
  decrease: () => set((state: any) => ({ count: state.count - 1 }))
}));

export default useStore;