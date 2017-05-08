
//React react_p6b luokka1

import React from 'react';

import { render } from 'react-dom';


export default class MyClass extends React.Component {

    render(){
        return (<div> <br /> <font color="red"> luokka1.jsx , funktio 1 </font> </div>);
    }


   // render(){ return (<div></div>); }

}

export const bar = function(a){
    console.log(a)
}

export const state = {
    a : 1,
    b : 2
}

   // render(<MyClass1 /> , document.getElementById('oma_luokka1'));