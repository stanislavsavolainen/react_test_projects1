
//npm install redux --save

// ./node_modules/.bin/webpack -d 

//my test application React + Redux and Material-UI (first steps to make my react-framework)

import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var initialState = {};

function reducer_function(state = initialState, action){
    //reducer not done !
}


class App extends React.Component {

    button_listener(){
        //read material-ui button data
        //redux -> dispatch store

        //redux dispatch not done

    }


    drawLayout(){
        //material-ui table with gui component like texField, Button and checkbox
        return (<div> <TextField /><Button>Click me </Button> hello again </div>);
    }

    render() {
        return <p> Hello React! <br /> {this.drawLayout()} </p>;
    }

}
render(<App />, document.getElementById('app'));
console.log('Hello World!');
