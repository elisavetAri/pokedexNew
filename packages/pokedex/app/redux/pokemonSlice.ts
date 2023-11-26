import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"



const initialState = {
    results: [{

    }]
  }
export const pokemonSlice  = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: (state) => {
        state.results
      },
      decrement: (state) => {
        state.results
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.results
      },
    },
  })
  
  export const { increment, decrement, incrementByAmount } = pokemonSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
//   export const selectCount = (state: RootState) => state.resul.value
  
  export default pokemonSlice.reducer