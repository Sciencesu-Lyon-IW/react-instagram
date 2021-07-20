import * as React from 'react';
import Img from "../components/Img";
import Post from "../components/Post";
import {getUser, resetStore} from "../actions/user.action";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../utils/isEmpty";
import store from "../store/config";
import {getPosts} from "../actions/post.action";

const Content = () => {
    const posts = useSelector((state) => state.postReducer).publications
    return (
        <div>
            <NavLink exact to='/'>
                <button onClick={resetStore}>Déconnexion</button>
            </NavLink>
            <header>
                <div className="container">
                    <Post/>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="gallery">
                        <div className="post-container">
                            {!isEmpty(posts) &&
                            posts.map((post, index) =>
                                <Img
                                    desc={post.description}
                                    imgUrl={post.imgUrl}
                                    key={index} />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Content;
