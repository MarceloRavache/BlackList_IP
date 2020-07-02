import React from 'react';
import './indexCss.css';

import ListInput from '../../components/ListInput/ListInput';
import ImageLogo from '../imgs/undraw_searching_p5ux.png';

const Home = ()=>{
    return(
        <div>
            <div className="div-logo">
                <img className="div-logo_item" src={ImageLogo}/><h2 className="div-logo_item"> BlackList Verificador</h2>
            </div>
            <ListInput/>
        </div>
    )
}

export default Home;