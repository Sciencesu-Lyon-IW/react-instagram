import React from "react";

const Home = () => {
    return (
        <div id="content">
            <form action>
                <h2>Instagram</h2>
                <div id="password_username">
                    <input type="text" placeholder="Username" required id="username" />
                    <input type="password" placeholder="Password" required id="password" />
                    <a href="https://www.instagram.com/accounts/password/reset/" id="lnkforget">Forgot?</a>
                    <input type="submit" defaultValue="Log in" id="submit" />
                </div></form>
            <div id="no_account">
                <h4>Don't have an account?<a href="#"> Sign up</a></h4>
            </div>
        </div>
    )
}

export default Home;
