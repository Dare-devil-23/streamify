import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '@/src/lib/store/filterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      filter: filterSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']