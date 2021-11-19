import React, { useState } from "react";
import UserPool from "../UserPool";
export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [name, setName] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
           if (err) console.error(err);
           console.log(data);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>

                <label htmlFor="password">Password</label> 
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    ></input>    

                <label htmlFor="nickname">Nickname</label>
                <input 
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                ></input>

                 <label htmlFor="name">Name</label>
                <input 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>

                    <button type="submit">signup</button>    
          
            </form>
        </div>
    );
};