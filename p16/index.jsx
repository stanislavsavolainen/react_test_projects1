import React from 'react';
import { render } from 'react-dom';

import Menu, { MenuItem } from 'material-ui/Menu';
import List, { ListItem, ListItemText } from 'material-ui/List';

import Button from 'material-ui/Button';

var clicked = false;

var selected_text = "m1"

//var value_text = [ "play", "stop", "pause", "rec", "rw", "fw"];

class App extends React.Component {

    clickFunction(){

       // if( clicked === false) clicked = true;
       // else if( clicked === true) clicked = false;   

        clicked =  !clicked;

        this.setState(this.state);


        console.log("Button clicked");
    }

     clickFunction2( selection_value ){

       selected_text = selection_value;

        clicked =  !clicked;

        this.setState(this.state);


        console.log("Selection clicked " + selection_value);
    }




    //draw material-ui dropDown menu like html options -selected element
    drawUiDropDown() {
        return (
        <div>
            <List>
                <ListItem onClick = { () =>  { this.clickFunction() } } >
                    <ListItemText secondary= { selected_text }  />
                </ListItem>  
            </List>
            <Menu open = { clicked }  >
                <MenuItem key="s1" onClick = { (event) => this.clickFunction2("m1") }> m1 </MenuItem>
                <MenuItem key="s2" onClick = { (event) => this.clickFunction2("m2") }> m2 </MenuItem>
                <MenuItem key="s3" onClick = { (event) => this.clickFunction2("m3") }> m3 </MenuItem>
            </Menu>    
        </div>);
    }

    render() {
        return <p> Hello React! <br /><br />  { this.drawUiDropDown() }  </p>;
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
