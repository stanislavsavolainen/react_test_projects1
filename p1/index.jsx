import React from 'react';
import {render} from 'react-dom'; 


// React , react_p1 projekti 

class App extends React.Component { 
 
 

 constructor(props) {

    super(props);
        this.state = {
           tapahtuman_tila: "Odota nappi painamista" 
        }
  
 }

//-----------------------------------------------------------------

   nappitapahtumakuuntelija() {

      this.setState ({ tapahtuman_tila : "Nappi painettu !" } );

   }

//-----------------------------------------------------------------


    render () { 

        const kayttoliittyma = [ <p1> Uusi react projekti ! </p1> , <p1> Viellä jotain projektin liittyvä </p1> ];
        const nappi_teksi = [ <p3> Paina nappia </p3> ];
        const nappin_tapahtuma_teksi = [  ];

       // return <p> Hello React!</p>;
       //return ( { kayttoliittyma } ) ;

       return(
           <div>
                {kayttoliittyma}
                <br /> <br /> <br />< br /> <p1> Tektsi ! </p1>
                <br /> <br /> <br />  <button onClick={ () => this.nappitapahtumakuuntelija() } > {nappi_teksi} </button>
                <br /> <br /> <br /> { this.state.tapahtuman_tila  } 
            </div>

       );

    }

//-----------------------------------------------------------------




 }

 render(<App/>, document.getElementById('app')); 
console.log('Hello World!');
