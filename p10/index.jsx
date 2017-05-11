import React from 'react';
import { render } from 'react-dom';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import DropDownMenu from 'material-ui/DropDownMenu';


//React, react_p10 projekti

// ./node_modules/.bin/webpack -d 

// http://www.material-ui.com/#/components/app-bar

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }


   //  handleChange = (event, index, value) => this.setState({value});



    render() {


        const styles = {
            button: {
                margin: 12,
            },
            exampleImageInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
            },
        };


        //-------------- material ui --------


        /*
        var material_ui_title_bar = <MuiThemeProvider>
            <AppBar
                title="Hello World"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />


        </MuiThemeProvider>;
        */


        //--------------------------------------------------------------------------------------------

           var material_ui_drop_down_menu = <div>

            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>

            

            
            <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false}
            >
                <MenuItem value={1} primaryText="Custom width" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>

        </div>;
        


        //-----------------------------------------------------------------------------------------



        var material_ui_menu_item =

            <Paper>
                <Menu desktop={true}>
                    <MenuItem primaryText="Back" />
                    <Divider />
                    <MenuItem primaryText="Recently closed" disabled={true} />
                    <MenuItem primaryText="Google" disabled={true} />
                    <MenuItem primaryText="YouTube" />
                </Menu>
            </Paper>

            ;



        //--------------------------------------------------------------------------------------


        var material_ui_title_bar = <div> <MuiThemeProvider>

            <AppBar
                title="Hello World"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            >

                <FlatButton style={{ color: 'red' }}> 123 </FlatButton>
                <FlatButton style={styles.exampleImageInput} > Nappi 2 </FlatButton>
                <RaisedButton> Nappi 3 </RaisedButton>

               

                {material_ui_drop_down_menu}

            </AppBar>


        </MuiThemeProvider>

        </div>;


        // {material_ui_menu_item}


        //{material_ui_drop_down_menu}
        //-----------------------------------------------------------------------------------------



        /*
     

        */



        /*
         var material_ui_title_bar = 
         <MuiThemeProvider>  <AppBar title="Test123" iconClassNameRight="muidocs-icon-navigation-expand-more" />   </MuiThemeProvider>
         
         */


        //------------------------------------

        // var material_ui_flat_button = <FlatButton> OK </FlatButton>;





        // return ( <div> { material_ui_title_bar } {material_ui_flat_button} </div>);
        // return (<div> {material_ui_title_bar} {material_ui_title_bar} <br /> < br/> {material_ui_drop_down_menu}  </div>);
        return (<div> {material_ui_title_bar} {material_ui_title_bar} <br /> < br />  </div>);



    }

}


render(<App />, document.getElementById('app'));
console.log('Hello World!');
