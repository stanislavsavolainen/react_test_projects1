import React from 'react';
import {render} from 'react-dom'; 


//react, react_p3 projekti

class App extends React.Component { 
 
   // const taulukko = []; //taulukko ei voi asettaa globaal muuttujana


   constructor(props) {

    super(props);
        this.state = {
           tapahtuman_tila: "Odota nappi painamista", 
           taulukko : ["aaa","bbb","ccc"] 
        } 


   }

//---------------------------------------------------------------------

    tulosta_tieto(){

        var puskuri_muuttuja = [];
        
        for(var i = 0; i < this.state.taulukko.length; i++){
           puskuri_muuttuja.push(<p>{this.state.taulukko[i]}</p>);
        }

      
       return <div> {puskuri_muuttuja} </div>;
    }

//---------------------------------------------------------------------
tieto_lisays(){

    

    var kentta_tieto = document.getElementById("teksti_kentta_id").value;

    //this.state.taulukko.push("+++");
    this.state.taulukko.push(kentta_tieto);

    console.log('tieto lisätty');

    this.setState(this.state);

}

//---------------------------------------------------------------------

anna_tieto(){

//input kenttä ja nappi

console.log('Nayta lisäys nappi');

 return( <div> <input type="text" name ="teksti_kentta" id="teksti_kentta_id" /><button onClick={ () => this.tieto_lisays() }> Lisää elementti </button> </div> );


}


//---------------------------------------------------------------------
   
    render () {

        // const taulukko = [ 'data1' ];


       
       //return (  this.tulosta_tieto()  );

           
  const a = [  <p> render start </p>  ];

    for(var i = 0; i < 16; i++){
      a.push( <p > Hello React 123 </p> );
    }


    //return <p> Hello React! 123 </p>;

// return (<div> { a } </div> );

 
       // return <p> Hello React!</p>;


  return ( 
      <div>
      {this.anna_tieto()} 
      {this.tulosta_tieto()}  
      </div>
        );
    }       
 }  

 render(<App/>, document.getElementById('app')); 
console.log('Hello World!');
