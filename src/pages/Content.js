import * as React from 'react';
import Image from "../components/Image";
import Img from "../components/Img";
import User from "../components/User";
import Edit from "../components/Edit";
import Infos from "../components/Infos";
import Description from "../components/Description";
import Post from "../components/Post";


const Registration = () => {

    return (
        <div>
            <header>
                <div className="container">
                    <Post/>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="gallery">
                        <Img/>
                        <Img/>
                        <Img/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Registration;
