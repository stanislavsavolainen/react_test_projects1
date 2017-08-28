
// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

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
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="contrast">Login</Button>
                </Toolbar>            
            </AppBar>
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
