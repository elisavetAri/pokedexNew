"use client"

import {useState} from "react"


export default function LogIn (){
    const [username, setUsername] = useState("");

    const onClickLogIn = () => {};
    const onClickToggle = () => {};
    const onClickLogout = () => {};

    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)}name="" id="" />
        <br>
        </br>
        <button>Login</button>
        <br>
        </br>
        <button>LogOut</button>
        
        </div>
    )
}