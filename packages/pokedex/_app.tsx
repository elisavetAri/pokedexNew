import { Provider, useDispatch } from "react-redux"
import { store } from "./app/redux/store"
import { AppProps } from "next/app"
import React from "react";


function MyApp ({Component, pageProps}: AppProps){
return( <Provider store={store}>
    <Component {...pageProps}/>
</Provider>)

}

useDispatch();
export default MyApp