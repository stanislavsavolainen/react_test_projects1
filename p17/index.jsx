import React from 'react';
import { render } from 'react-dom';

import Menu, { MenuItem } from 'material-ui/Menu';
import List, { ListItem, ListItemText } from 'material-ui/List';

import Button from 'material-ui/Button';

var clicked = false;

var selected_text = "play"

var value_text = ["play", "stop", "pause", "rec", "rw", "fw"];

class App extends React.Component {

    clickFunction() {
        // if( clicked === false) clicked = true;
        // else if( clicked === true) clicked = false;   
        clicked = !clicked;
        this.setState(this.state);
        console.log("Button clicked");
    }

    clickFunction2(selection_value) {
        selected_text = selection_value;
        clicked = !clicked;
        this.setState(this.state);
        console.log("Selection clicked " + selection_value);
    }


    //draw material-ui dropDown menu like html options -selected element
    drawUiDropDown() {

        let menu_option = value_text.map( (s_value) =>
            <div> <MenuItem key="s1" onClick={() => this.clickFunction2( ""+ s_value)} > { s_value } </MenuItem> </div>
        );

        return (
            <div>
                <List>
                    <ListItem onClick={() => { this.clickFunction() }} >
                        <ListItemText secondary={selected_text} />
                    </ListItem>
                </List>
                <Menu open={clicked}  >
                    {menu_option}
                </Menu>
            </div>);
    }

    render() {
        return <p> Hello React! <br /><br />  {this.drawUiDropDown()}  </p>;
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
