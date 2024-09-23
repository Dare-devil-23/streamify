import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  searchTerm: string
}

const initialState: FilterState = {
  searchTerm: "",
}

export const filterSlice = createSlice({
  name: 'tableFilter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = filterSlice.actions

export default filterSlice.reducer