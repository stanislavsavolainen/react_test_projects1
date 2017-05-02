import React from 'react';
import {render} from 'react-dom'; 

//React, react_p2 projekti

class App extends React.Component { 

     constructor(props) {
        
        super(props);

        this.state = {
           tapahtuman_tila: "Odota nappi painamista",
           tapahtuma_numero: 0 
        }
  
 }

//----------------------------------------------------

 nappitapahtumakuuntelija() {

      //this.setState ({ tapahtuman_tila : "Nappi painettu !" } );
      //this.setState( { tapahtuma_numero : 1 } );
      
      this.setState ({ tapahtuman_tila : "Nappi painettu !", tapahtuma_numero : 1 } );

    
      //console.log('Nappi painettu, tila : 1 ' );
       console.log('Nappi painettu, tila : ' + this.state.tapahtuma_numero ); //Reactin tilan luku ja tulostus konsolissa 
   }

//-----------------------------------------------------

nappiresettapahtuma(){
     
      this.setState ({ tapahtuman_tila : "Odota nappi painamista", tapahtuma_numero : 0 } );

      // console.log('Nappi painettu, tila : 0' );
     console.log('Reset nappi painettu, tila : ' + this.state.tapahtuma_numero);  //Reactin tilan luku ja tulostus konsolissa

}

//----------------------------------------------------
/*
piira_kayttoliittyma_komponentti(  nykyinen_tila ){

    var a = 0;
    var b = 0;
    var c = 0;

    var merkkijono_taulukko; 

    //käyttöliittymä arvojen kovakoodaminen switch-case lohkossa
    switch(nykyinen_tila){

        case 1: 
            a = 1; b = 1; c = 1;
        break;

        case 2: 
            a = 2; b = 2; c = 2;
        break;

        case 3: default:  
            a = 3; b = 3; c = 3;
        break;

    }


    // ---------- oletus --------
        merkkijono_taulukko.push(a);
        merkkijono_taulukko.push(b);
        merkkijono_taulukko.push(c);


   return ( "teksti", merkkijono_taulukko ); //funktio palautaa "merkkijono taulukko" jonka sisältö riippuu "tapahtuma_tila" tilasta
}
*/
//----------------------------------------------------
    render () { 
      
      //  return <p> Hello React!</p>;

     // const nappi_teksi = <p3> Paina nappia </p3>;
      const nappi_teksti = [ <p3> Paina nappia </p3> ];       
      const nappi_painettu_teksti = [ <p3> Paina uudelleen </p3> ];
      const nappi_tilan_reset = [ <p> "Reset" tapahtuma </p>];

      //------------
      //if( this.state.tapahtuman_tila == "Nappi painettu !" ){
        if( this.state.tapahtuma_numero == 1 ){

        return (
          <div>
                <button onClick={ () => this.nappitapahtumakuuntelija() } > {nappi_painettu_teksti} </button>
                <br /> <br /> <br /> { this.state.tapahtuman_tila  } 
                <button onClick={ () => this.nappiresettapahtuma() } > {nappi_tilan_reset} </button>
           </div>

      );

   // <button onClick={ () => this.nappiresettapahtuma() }> {nappi_tilan_reset} </button>


      }

      //------------

      //else if(  this.state.tapahtuman_tila == "Odota nappi painamista" ){
       else if(  this.state.tapahtuma_numero == 0 ){

        return (
            <div>
                <button onClick={ () => this.nappitapahtumakuuntelija() } > {nappi_teksti} </button>
                <br /> <br /> <br /> { this.state.tapahtuman_tila  } 
           </div>

        );

      }
      //-----------

      /*
      if( this.state.tapahtuman_tila == "" ) piira_kayttoliittyma_komponentti(1);
      else if(this.tapahtuman_tila == "" ) piira_kayttoliittyma_komponentti(2);
      else piira_kayttoliittyma_komponentti(3);

      return(  {piirrettava_tila}  );
      */

    }       
 
 //-----------------------------------------------------

}  



 render(<App/>, document.getElementById('app')); 
console.log('Hello World!');
