import * as React from 'react';
import {useState} from "react";
import {addPost, getPosts} from "../actions/post.action";
import {useDispatch, useSelector} from "react-redux";
import {json} from "express";

const Post = () => {
    const [description, setDescription] = useState();
    const [imgUrl, setImgUrl] = useState();

    const [error, setError] = useState('');
    // chercher dans le store

    const dispatch = useDispatch()

    const handleForm = async (e) => {
        e.preventDefault();
        let userId = '60f1c4f43f7b623038bf2998'
        if (description && imgUrl){
            console.log('imgurl', JSON.parse(imgUrl))

            const data = {
                description,
                imgUrl,
                userId,
                likes: 0,
            }
            await dispatch(addPost(data))
            setDescription('')
            setImgUrl('')
            dispatch(getPosts())

        }else {
            setError('Erreur lors de l\'ajout d\'un post')
        }
    }

    return (
        <form action="" encType="multipart/form-data" onSubmit={(e) => handleForm(e)} >
            <input
                type="text"
                id="post"
                name="post"
                placeholder="Votre post"
                onChange={(event) => setDescription(event.target.value)}/>

            <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={(event) => setImgUrl(event.target.files[0])}

            />
            <input type="submit" value="Submit"/>
            {error}

        </form>
    );
};

export default Post;
