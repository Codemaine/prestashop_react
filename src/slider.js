import React,{Component} from 'react';

import logo from './logo.svg';
class Slider extends Component{

render(){

    return(
        <>
        <div className="slider-list">
            <div className="slider_1"><img src={logo} width="400px"/></div>
        </div>
        </>
    )

}
}

export default Slider;