import { createSlice } from "@reduxjs/toolkit"
import  Pokemon from "util/types/Pokemon"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: Pokemon  = {
   results:[]
  }
export const pokemonSlice  = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
      pokemon: (state) => state.results
      },
  })
  
  
  export const {pokemon}  = pokemonSlice.actions;
