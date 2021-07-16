import * as React from 'react';
import {useState} from "react";
import {addPost, getPosts} from "../actions/post.action";
import {useDispatch, useSelector} from "react-redux";

const Post = () => {
    const [post, setPost] = useState();
    const [file, setFile] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState('');
    // chercher dans le store
    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    /*    useEffect(() => {
            setTitle(title)
            setContent(content)
        }, []);*/
    const handleForm = async (e) => {
        e.preventDefault();
        if (post){
            console.log('post',post)
            console.log('file',file)
            const data = {
                post,
                file,
                author: user[0].pseudo,
                likes: 0,
            }
            await dispatch(addPost(data))
            setFile('')
            setPost('')
            dispatch(getPosts())
        }else {
            setError('Erreur lors de l\'ajout d\'un post')
        }
    }

    return (
        <form action="" onSubmit={(e) => handleForm(e)}>
            <input
                type="text"
                id="post"
                name="post"
                placeholder="Votre post"
                onChange={(event) => setPost(event.target.value)}/>

            <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={(event) => setFile(event.target.value)}
            />
            <input type="submit" value="Submit"/>
            {error}

        </form>
    );
};

export default Post;
