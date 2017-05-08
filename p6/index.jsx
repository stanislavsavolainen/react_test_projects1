
//React, react_p6b projekti

////./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

import Foo from './MyClass.jsx';
import {bar, state} from './MyClass.jsx';

//import 'luokka.jsx';

class App extends React.Component {



    funktio1(){

        return (<div> <br /> <font color="orange"> index.jsx , funktio 1 </font> </div>);
    }


    render() {

        bar("moi");
        return (<p> <br /> <font color="green"> index.jsx , render funktio </font> {this.funktio1()} <Foo /> <br />{state.a}</p>);
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
