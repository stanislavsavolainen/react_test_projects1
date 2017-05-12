
//frontend-hipster-kit/src/modules/Home2.jsx //muokattu 1

import React from 'react';

import {
  CardContent,
  CardActions,
  CardMedia,
} from 'material-ui/Card';

import Button from 'material-ui/Button';
import Text from 'material-ui/Text';
import TextField from 'material-ui/TextField';

import CardWrapper from '../components/CardWrapper';
import ResponsiveCard from '../components/ResponsiveCard';

import theme from '../utils/theme';

import chilicorn from '../../assets/chilicorn/chilicorn_no_text-256.png';
import placeholder from '../../assets/placeholder.png';

const styles = {
  chilicornHeader: {
    height: 240,
    background: `url(${chilicorn})`,
    backgroundColor: theme.legacyPalette.primary3Color,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  loremHeader: {
    objectFit: 'cover',
    height: 240,
    width: '100%',
  },
};



class Home2 extends React.Component {

// -------------------------------
constructor(props) {
        super(props);
        this.state = {
           tx_arvo:""
        }
  }

//---------------------------------

handleChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

//---------------------------------

  nappin_tapahtuma(){
    console.log("Material-ui nappia painettu");
    console.log("tekstikenttän arvo on : " + this.state.tx_arvo);
  }

  //--------------------------------

  lueArvoTekstikentalta(){

  }

//----------------------------------


  render() {

      let ylimaaraisetNapit = (
      
      <div>
        <Button onClick={ () => this.nappin_tapahtuma() } >Moi</Button>
        <Button>Hei</Button>
        <Button  style={ { color: 'red' } }  > Jotain ...</Button>
      
        <TextField  type="text" label="kentta_a" onChange={ (tapahtuma) => this.state.tx_arvo = tapahtuma.target.value } style={ { color: 'red', backgroundColor: 'silver',  fontSize: 30 }  } ></TextField>
      </div>
    );

/*
    let ylimaaraisetKenttat = ( 
      <div>
       <TextField  type="text" label="kentta_aa" onChange={ (tapahtuma) => this.state.tx_arvo = tapahtuma.target.value } style={ { color: 'red', backgroundColor: 'silver',  fontSize: 30 }  } ></TextField>
       <TextField  type="text" label="kentta_bb" onChange={ (tapahtuma) => this.state.tx_arvo = tapahtuma.target.value } style={ { color: 'red', backgroundColor: 'silver',  fontSize: 30 }  } ></TextField>
       </div>
    );
*/

    return (
        <div>
        { ylimaaraisetNapit }
        </div>
    );
  
}


};

export default Home2;

