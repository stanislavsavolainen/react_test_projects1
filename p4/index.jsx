import React from 'react';
import { render } from 'react-dom';

//React, react_p4 projekti

//Ctrl + shift + i = tekstin tasaus

// ls -d $PWD/*   = linux tulosta kansion polun


class App extends React.Component {



    constructor(props) {
        
        super(props);

        this.state = {
           tiedoston_teksti: "Ei ole tietoa !",
           init_tapahtunut: false,
           yleinen_tieto : ""
    
        }
    }

//------------------------------------------------------------

    lueTiedosto(  uusi_tapahtuma) {

         console.log("Tiedoston lukufunktio."); 

         var input_kentta = uusi_tapahtuma.target; //parametrina tiedoston taulukko

         
      //  var url = "/home/stanislav/Digitalents/react_p4/";
      //  var file_name = "file_data1.txt";

        

        //var tiedoston_teksti = reader.result;

       // console.log(tiedoston_teksti);

      // console.log(url + file_name);
        
        var reader = new FileReader();
        reader.onload = () => {
           
            var text = reader.result;

            console.log(text);

            this.state.tiedoston_teksti = text;

            this.state.init_tapahtunut = true;

            this.setState(this.state); //tallentaa muistiin ja päivittää React komponentin näyttön


        };
        
       //  reader.readAsText(url + file_name, "UTF-8");

      reader.readAsText(input_kentta.files[0]);



    }

//-------------------------------------------------------------

nayta_tiedot(){

    
    //parseroi tiedotn muuttujan
   // var str = "How are you doing today?";
   //var res = str.split(" "); 
   var tieto_taulukko = this.state.tiedoston_teksti.split("*"); //uusi viesti alkaa merkillä   *
   var tietojen_lukumaara = 0;

    const tieto_elementit = [];
    
     var taulun_tyyli = { borderStyle : 'solid' , borderWidth: 5, borderColor: 'green' };
    var solun_tyyli = { borderStyle : 'solid' , borderWidth: 3, borderColor: 'green' };


   //tietojen_lukumaara = tieto_taulukko.lenght; // kertoo kuinka paljon viestejä on tiedostossa      
   
    //käy läpi for-each silmukalla kaikki tiedot
   // for(var i = 0; i < tieto_taulukko.length; i++){
      
      
      tieto_taulukko.forEach(  (elementin_arvo , taulukko_indx) => {
        
        tietojen_lukumaara ++;

        //tieto_elementit.push( <div> <br /> {elementin_arvo}  </div>);
        tieto_elementit.push( <tr> <td style={solun_tyyli}> {elementin_arvo} </td> </tr>);

    } );
    


return (<div> <p> Elementien lukumäärä : { tietojen_lukumaara } <br /> <table style={taulun_tyyli} > { tieto_elementit } </table> </p> </div>);
}

//-------------------------------------------------------------

kirjoita_uusi_tieto(){




return ( <div> </div>);
}

//-------------------------------------------------------------

omareactinitfunktio(){
    console.log("Init funktio !");
}

//-------------------------------------------------------------

    render() {

        
        //suorita vain kerran "tiedoston luku" ja "init" funktion 
        if( ! this.state.init_tapahtunut ){ 
        // if(this.state.init_tapahtunut == false){
            console.log("Suorita init ja tiedoston luku");  
            this.omareactinitfunktio();
            //this.lueTiedosto();       
        } 
   

        return ( <div>
         <input type='file' accept='text/plain' onChange = { (tapahtuma) => this.lueTiedosto( tapahtuma)  } />
         <p> Hello React!  {this.state.tiedoston_teksti} </p> 
         <br />
         { this.kirjoita_uusi_tieto() }
         <br /> 
         { this.nayta_tiedot() }
         </div>);
    }

}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
