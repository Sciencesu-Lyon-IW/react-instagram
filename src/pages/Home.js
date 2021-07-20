import React, {useState} from "react";
import {url} from "../actions/post.action";
import {NavLink} from "react-router-dom";
import bcrypt from 'bcryptjs'
import {useDispatch} from "react-redux";
import {login} from "../actions/user.action";
import store from '../store/config'

const Home = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const saltRounds = 10
    const dispatch = useDispatch()

    function hash() {
        bcrypt.genSalt(saltRounds, function (saltError , salt) {
            if (saltError) {
                throw saltError
            } else {
                bcrypt.hash(password, salt, function(hashError, hash) {
                    if (hashError) {
                        throw hashError
                    } else {
                        return hash
                    }
                })
            }
        })
    }


    const handleSubmit = async e => {
        e.preventDefault();
        if (email && password){
            await store.dispatch(login({email, password}))
            //await dispatch(login({email, password}))
            props.history.push({
                pathname: '/home',
            });
        }else {
            setError(true)
        }
    }
    return (
        <div id="content">
            <form onSubmit={handleSubmit}>
                <h2>Instagram</h2>
                <div id="password_username">
                    <input type="text" placeholder="Email" required id="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" required id="password" onChange={e => setPassword(e.target.value)}/>
                    <a href="https://www.instagram.com/accounts/password/reset/" id="lnkforget">Forgot?</a>
                        <input type="submit" defaultValue="Log in" id="submit" />
                    {error === true  && <><small style={{ color: 'red' }}>Email / Pseudo ou mot de passe incorrect</small><br /></>}<br />
                </div></form>
            <div id="no_account">
                <h4>Don't have an account?<a href="#"> Sign up</a></h4>
            </div>
        </div>
    )
}

export default Home;
