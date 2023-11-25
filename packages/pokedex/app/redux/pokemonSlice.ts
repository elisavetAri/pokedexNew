import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk('/pokemon',async (thunkApi) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json();
    return data;
})

const initialState = {
    entities: []
 } as any
 const pokemonSlice = createSlice(({
    name: 'pokemon',
    initialState,
    reducers:{}
,extraReducers:(builder)=>{
    builder.addCase(fetchPokemon.fulfilled,(state, action)=>{
state.entities.push(...action.payload)
    })
} 
}
))
export default pokemonSlice.reducer