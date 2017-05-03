import React from 'react';
import { render } from 'react-dom';

//React, react_p4 projekti

//Ctrl + shift + i = tekstin tasaus

// ls -d $PWD/*   = linux tulosta kansion polun


class App extends React.Component {



    constructor(props) {

        super(props);

        this.state = {
            seuraava_elementin_merkki: "*",
            tiedoston_teksti: "Ei ole tietoa !",
            init_tapahtunut: false,
            yleinen_tieto: "",
            taulukko: ["aaa", "bbb", "ccc"]

        }
    }

    //------------------------------------------------------------

    lueTiedosto(uusi_tapahtuma) {

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

    nayta_tiedot() {


        //parseroi tiedotn muuttujan
        // var str = "How are you doing today?";
        //var res = str.split(" "); 
        // var tieto_taulukko = this.state.tiedoston_teksti.split("*"); //uusi viesti alkaa merkillä   *
        this.state.taulukko = this.state.tiedoston_teksti.split("*");
        //this.state.taulukko = this.state.tiedoston_teksti.split(this.state.seuraava_elementin_merkki);

        var tietojen_lukumaara = 0;

        const tieto_elementit = [];

        var taulun_tyyli = { borderStyle: 'solid', borderWidth: 5, borderColor: 'green' };
        var solun_tyyli = { borderStyle: 'solid', borderWidth: 3, borderColor: 'green' };


        //tietojen_lukumaara = tieto_taulukko.lenght; // kertoo kuinka paljon viestejä on tiedostossa      

        //käy läpi for-each silmukalla kaikki tiedot
        // for(var i = 0; i < tieto_taulukko.length; i++){


        //tieto_taulukko.forEach(  (elementin_arvo , taulukko_indx) => {
        this.state.taulukko.forEach((elementin_arvo, taulukko_indx) => {

            tietojen_lukumaara++;

            //tieto_elementit.push( <div> <br /> {elementin_arvo}  </div>);
            tieto_elementit.push(<tr> <td style={solun_tyyli}> {elementin_arvo} </td> </tr>);

        });



        return (<div> <p> Elementien lukumäärä : {tietojen_lukumaara} <br /> <table style={taulun_tyyli} > {tieto_elementit} </table> </p> </div>);
    }

    //-------------------------------------------------------------

    kirjoita_uusi_tieto() {


        //JavaScript write file
        // download('file text', 'myfilename.txt', 'text/plain')
        // function download(text, name, type)
        // var text, type;

        //var file = new Blob([text], {type: type});

        //var type = "text/plain"; 
  
        var tekstin_data = document.getElementById("teksti_kentta_id").value; // lue arvo tekstikentästä

        this.state.tiedoston_teksti += "*" + tekstin_data; 

        
        //päivitä näkymä
        this.setState(this.state); //tallentaa muistiin ja päivittää React komponentin näyttön

        /*
        var file = new Blob([this.state.tiedoston_teksti], { type: type });

        URL.createObjectURL(file);

        //tee linkki tiedostoon ---> luo tallennusnimen tiedoston tallentamista varten
        var name = "file_data_copy.txt";
        a.href = URL.createObjectURL(file);
        a.download = name;
        */
    }

    //-------------------------------------------------------------

    tallenna_tiedosto(){

        var type = "text/plain";

         var file = new Blob([this.state.tiedoston_teksti], { type: type });

        URL.createObjectURL(file);

        //tee linkki tiedostoon ---> luo tallennusnimen tiedoston tallentamista varten
        
        //var name = "file_data_copy.txt";
        var name = document.getElementById("tiedoston_nimi_kentta_id").value; // lue arvo tekstikentästä
        
        a.href = URL.createObjectURL(file);
        a.download = name;

    }


    //-------------------------------------------------------------

    poista_tieto() {


    }


    //-------------------------------------------------------------

    omareactinitfunktio() {
        console.log("Init funktio !");
    }

    //-------------------------------------------------------------

    render() {
//value = "file_data_copy.txt"

        //suorita vain kerran "tiedoston luku" ja "init" funktion 
        if (!this.state.init_tapahtunut) {
            // if(this.state.init_tapahtunut == false){
            console.log("Suorita init ja tiedoston luku");
            this.omareactinitfunktio();
            //this.lueTiedosto();       
        }


        return (<div>
            <input type='file' accept='text/plain' onChange={(tapahtuma) => this.lueTiedosto(tapahtuma)} />
            <p> Hello React!  {this.state.tiedoston_teksti} </p>
            <br />
            <p> Anna uusi elementti </p> <input type="text" name="teksti_kentta" id="teksti_kentta_id" /><button onClick={() => this.kirjoita_uusi_tieto()}> Lisää elementti </button> 
            
            {this.nayta_tiedot()}
            <p> Tallenna tiedosto : </p> <br /> <br /><input type="text" name="tiedoston_nimi_kentta" id="tiedoston_nimi_kentta_id"  /><button onClick={() => this.tallenna_tiedosto()}> Tallenna tiedosto </button> 
            <a href="" id="a"> Tallenna data </a>

        </div>);
    }

}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
