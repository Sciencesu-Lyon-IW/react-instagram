import * as React from 'react';
import Image from "../components/Image";
import Img from "../components/Img";
import User from "../components/User";
import Edit from "../components/Edit";
import Infos from "../components/Infos";
import Description from "../components/Description";


const Registration = () => {

    return (
        <div>
            <header>
                <div className="container">
                    <div className="profile">
                        <Image/>
                        <User/>
                        <Edit/>
                        <Infos/>
                        <Description/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Registration;