
// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
//--------- icons ---------------------------
//https://material.io/icons/
import MenuIcon from 'material-ui-icons/Menu';
import MenuIcon2 from 'material-ui-icons/Face';
import MenuIcon3 from 'material-ui-icons/Fingerprint';

import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';

import { LabelRadio, RadioGroup } from 'material-ui/Radio';

//import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Checkbox from 'material-ui/Checkbox';

import Slide from 'material-ui/transitions/Slide';

class App extends React.Component {
    render() {

        //return <p> Hello React!</p>;

        return (<div>

            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>

            <AppBar position="static">
                <Toolbar style={{ height: 120, width: 420 }}>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                        <MenuIcon />
                        <MenuIcon />
                    </IconButton>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon2 />
                    </IconButton>
                    <IconButton color="contrast" aria-label="Menu" >
                        <MenuIcon2 style={{ height: 80, width: 300 }} />
                    </IconButton>
                    <IconButton color="contrast" aria-label="Menu" >
                        <MenuIcon3 style={{ height: 80, width: 300, backgroundColor: 'red' }} />
                    </IconButton>
                    <IconButton color="contrast" aria-label="Menu" >
                        <MenuIcon3 style={{ height: 80, width: 300, color: 'gold' }} />
                    </IconButton>
                    <IconButton color="contrast" aria-label="Menu" >
                        <MenuIcon3 style={{ height: 80, width: 300 }} />
                    </IconButton>
                    <Button color="contrast">Login</Button>
                </Toolbar>
                <Toolbar> 123123  </Toolbar>
            </AppBar>
           
            <AppBar position="static">
                1234567890
                 <br /><br />
                <Toolbar></Toolbar>
                5345345345
                <Toolbar stlye={{ width: 500 }} >

                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell> 2345  </TableCell>
                                <TableCell>
                                    <TextField style={{ color: 'green', backgroundColor: 'silver', width: 300 }} hintStyle={{ color: 'green' }}></TextField>
                                    <br /> <Button style={{ color: 'green', backgroundColor: 'orange', width: 300 }}> Hei </Button>

                                </TableCell>
                                <TableCell> <Button style={{ color: 'green', backgroundColor: 'orange' }}> Hei </Button>  </TableCell>
                                <TableCell> 2345  </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Toolbar>
                <Toolbar> 6789 </Toolbar>

            </AppBar>

            <br /><br /><br /><br />
            TextFields :
            <TextField></TextField><TextField></TextField>
            <br /><br />
            PasswordFields :
            <TextField type="password" />

            <br /><br />

            <Table><TableBody>
                <TableRow>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                    <TableCell> 2345  </TableCell>
                </TableRow>
            </TableBody></Table>

            <br /><br />
            <Button>Material-ui button 1</Button><Button>Material-ui button 2</Button>

            <br /><br />

            <Checkbox label="test123" />
            <Checkbox label="test123" />
            <Checkbox label="test123" />
            <Checkbox label="test123" />
            <Checkbox label="test123" />
            <Checkbox label="test123" />
            <Checkbox label="test123" />

            <br /><br />


            <AppBar title="12345" />

        </div>
        );

        /*
         <RadioGroup>
                <LabelRadio label="1" value="1" />
                <LabelRadio label="2" value="2" />
                <LabelRadio label="3" value="3" />
                <LabelRadio label="4" value="4" />
            </RadioGroup>
        */


    }
}
render(<App />, document.getElementById('app'));
console.log('Hello World!');
