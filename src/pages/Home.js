import React, {useState} from "react";
import {url} from "../actions/post.action";
import {NavLink} from "react-router-dom";

const Home = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    async function loginUser(data) {
        return await fetch(url + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                data
            )
        })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            username,
            password
        });
    }
    return (
        <div id="content">
            <form onSubmit={handleSubmit}>
                <h2>Instagram</h2>
                <div id="password_username">
                    <input type="text" placeholder="Username" required id="username" onChange={e => setUserName(e.target.value)}/>
                    <input type="password" placeholder="Password" required id="password" onChange={e => setPassword(e.target.value)}/>
                    <a href="https://www.instagram.com/accounts/password/reset/" id="lnkforget">Forgot?</a>
                    <NavLink exact to="/home">
                        <input type="submit" defaultValue="Log in" id="submit" />
                    </NavLink>
                </div></form>
            <div id="no_account">
                <h4>Don't have an account?<a href="#"> Sign up</a></h4>
            </div>
        </div>
    )
}

export default Home;
