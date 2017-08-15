import React from 'react';
import { render } from 'react-dom';


import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Toolbar from 'material-ui/Toolbar';

//import { AppBar, Drawer, MenuItem } from 'material-ui';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import AppBar from 'material-ui/AppBar';
//import {cyan500} from 'material-ui/styles/colors';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { createMuiTheme } from 'material-ui/styles';
//import theme from './theme';

//const muiTheme = createMuiTheme(theme);
import NavigationBar from "material-ui/AppBar";

class App extends React.Component {

    render() {



        /*
        const muiTheme = getMuiTheme({
            palette: {
                textColor: cyan500,
            },
            appBar: {
                height: 50,
            },
        });
*/

        //return <p> <header> <AppBar style={{backgroundColor: '#708090'}} /> </header> 
       
       /*
        return
        <p>
            Material-ui  : <TextField></TextField><Button> Material-UI button</Button><br />
            Normal html : <input type="text" /><button> Click me </button> <br />  Hello React!</p>
        */
        return (<p> 
        <Toolbar> </Toolbar>>  
        Material-ui  : <TextField></TextField><Button> Material-UI button</Button><br />
        Normal html : <input type="text" /><button> Click me </button> <br />  Hello React!
        </p>);

        }
}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
