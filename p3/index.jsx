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
        
        var taulun_tyyli = { borderStyle : 'solid' , borderWidth: 5, borderColor: 'green' };
        var solun_tyyli = { borderStyle : 'solid' , borderWidth: 3, borderColor: 'green' };
        var jokatoinen = {borderStyle : 'solid' , borderWidth: 3, borderColor: 'red' };

        
          // puskuri_muuttuja.push( <p> <table> </p>  ); 
     //   for(var i = 0; i < this.state.taulukko.length; i++){
          this.state.taulukko.forEach( ( taulukko_arvo , index ) => {



          
       
       
       
           //puskuri_muuttuja.push( <p> <tr /> <td> {this.state.taulukko[i]} </td> <td> <button> Poista </button> </td>  </p> );
          // puskuri_muuttuja.push("<tr /> <td>" + <p> {this.state.taulukko[i]} + </p> +"</td> <td> <button> Poista </button> </td>");
            // puskuri_muuttuja.push( <p> <tr /> <td> </p>  <p> {this.state.taulukko[i]} </p> <p> </td> <td> <button> Poista </button> </td> </p>);

              // puskuri_muuttuja.push( <tr > <td style={solun_tyyli} > <p> {this.state.taulukko[i]} </p> </td> <td style={solun_tyyli}> <button> Poista </button> </td></tr>);
                
         


              var solunvari = (index % 2) == 1 ? jokatoinen : solun_tyyli;

               /*
               if(punainen){
                  // puskuri_muuttuja.push( <tr > <td style={jokatoinen} > <p> {this.state.taulukko[i]} </p> </td> <td style={jokatoinen}> <button> Poista </button> </td></tr>);
                   solunvari = jokatoinen;
               }
               else if( !punainen) {
                   // puskuri_muuttuja.push( <tr > <td style={solun_tyyli} > <p> {this.state.taulukko[i]} </p> </td> <td style={solun_tyyli}> <button> Poista </button> </td></tr>);
                    solunvari = solun_tyyli;
               }
               */
              
              //vanha for //puskuri_muuttuja.push( <tr > <td style={solunvari} > <p> {this.state.taulukko[i]} </p> </td> <td style={solunvari}> <button onClick = { () => this.tiedon_poisto(index) } > Poista </button> </td></tr>);
                  puskuri_muuttuja.push( <tr > <td style={solunvari} > <p> {taulukko_arvo} </p> </td> <td style={solunvari}> <button onClick = { () => this.tiedon_poisto(index) } > Poista </button> </td></tr>);

                } );

        //} //for loppu
          //<th> Viesti : </th> <th> Toiminnot  <th>
       return <div> <table style = {taulun_tyyli } > {puskuri_muuttuja}  </table> </div>;
    
      // borderColor: '#000033', borderWidth: 1,
      //borderStyle: this.state.showBorder ? 'dashed' : null, //else if rakenne, ternary operator

}

//---------------------------------------------------------------------
tieto_lisays(){

    

    var kentta_tieto = document.getElementById("teksti_kentta_id").value;

    //this.state.taulukko.push("+++");
    this.state.taulukko.push(kentta_tieto);

    console.log('tieto lisätty');

    this.setState(this.state); //tallentaa muistiin ja päivittää React komponentin näyttön

}

//---------------------------------------------------------------------

tiedon_poisto( elementti_indeksi ){

this.state.taulukko.splice(elementti_indeksi, 1);  //poista elementti (indeksi)

 this.setState(this.state); //tallentaa muistiin ja päivittää React komponentin näyttön

 console.log('Poista elementti ' + elementti_indeksi);

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




/*
Ternary operaatori käyttö

    if(nimi == "admin") temp_nimi = nimi;
     else temp_nimi = "user";


     temp_nimi = nimi == "admin" ? nimi : "user";


     return a ? 1 : (b ? 2 : (c ? 3 : 4))
     if (a) return 1
     else if (b) return 2
     else if (c) return 3
     else return 4
*/