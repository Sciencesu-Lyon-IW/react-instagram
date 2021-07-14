import * as React from 'react';

const Post = () => {
    return (
        <form action="">
            <input type="text" id="post" name="post" placeholder="Votre post"/>

            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default Post;
