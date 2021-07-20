import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector} from "react-redux";
const Img = (posts) => {
    //const posts = useSelector((state) => state.postReducer)

    console.log('img posts', posts)
    return (
        <div className="gallery-item" tabIndex={0}>
            <img src={posts.imgUrl} className="gallery-image" alt="" />
            <div className="txt-post">
                <p>{posts.desc}</p>
                {/*<FontAwesomeIcon icon={["far", "heart"]} />*/}
            </div>
        </div>
    );
};

export default Img;
