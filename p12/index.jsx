import React from 'react';
import { render } from 'react-dom';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';

import { LabelRadio, RadioGroup } from 'material-ui/Radio';



class App extends React.Component {
    render() {

        //return <p> Hello React!</p>;

        return (<div>

            <TextField></TextField><br /><TextField></TextField>

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
