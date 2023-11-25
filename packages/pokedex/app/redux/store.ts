import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from './pokemonSlice'


export function makeStore(){

    return configureStore({
        reducer:{
            pokemon : pokemonReducer,
        }
    })
}

export const store = makeStore()
export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch