import React from 'react';
import { render } from 'react-dom';


//React, react_p9 projekti

////./node_modules/.bin/webpack -d 

// node_modules/.bin/webpack-dev-server uusi komento (ei käännä React budle.js eli ei tee päivityksiä koodi muutoksesta)

//https://www.npmjs.com/package/react-http-request   //toinen vaihtoehto käsitellä GET pyyntöjä JSON avulla


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            //
            kentta_data: ["Nimi", "Sukunimi", "Ikä", "Ammatti", "Puhnro", "Sähköposti", "Harrastukset", "bbbb", "ccccc", "dddsdas", "abcd"],
            kentta_nimet: ["i_nimi", "i_snimi", "i_ika", "i_prof", "i_phone", "i_email", "i_hobby", "bbbb", "ccccc", "fisdofjsoi", "asdfg"],
            //tyyli taulukko
            table: { borderStyle: 'solid', borderWidth: 5, borderColor: 'green', backgroundColor: 'orange', color: 'green' },
            td: { borderStyle: 'solid', borderWidth: 3, borderColor: 'blue' },
            nappi_tyyli: { color: 'green', fontSize: 30, backgroundColor: 'orange', borderStyle: 'solid', borderWidth: 5, borderColor: 'green' },
            kentta_tyyli: { color: 'blue', backgroundColor: 'silver' },
            //kenttä taulukko
            taulukko: [],
            //login
            kirjautuminen: false,
            profiili_taulukko: []

        }
    }


    //-----------------------------------------------

    lahetaPost() { }


    //-----------------------------------------------

    lahetaGet() {


        /*
        this.state.taulukko = [

            "nimi",
            document.getElementById("i_nimi").value,
            "snimi",
            document.getElementById("i_snimi").value,
            "ika",
            document.getElementById("i_ika").value,
            "ammatti",
            document.getElementById("i_prof").value,
            "puhnro",
            document.getElementById("i_phone").value,
            "sahkoposti",
            document.getElementById("i_email").value
        ];

        */

        this.state.taulukko.splice(0, this.state.taulukko.length); // poistaa kaikki elementit ?

        this.state.kentta_nimet.forEach((kentta_data_muuttuja, kentta_data_indeksi) => {
            // this.state.taulukko.push(kentta_data_muuttuja);
            this.state.taulukko.push(document.getElementById(kentta_data_muuttuja).value);
        });




        // console.log("Nimi :" + this.state.taulukko[0] + "  Ammatti : " + this.state.taulukko[3]);



        //===== oma json viritelmä ======

        var json_data = "";

        json_data += "{";

        //forEach rakenteella käy läpi koko state taulukon
        this.state.taulukko.forEach((kenttan_arvo, kentta_indeksi) => {

            //   json_data += '"' + "n" + kentta_indeksi + '"' + ":" + '"' + kenttan_arvo + '"' + ","; //myöhemmin, jos seuraava arvo ei ole null niin laita , pilkku
            json_data += "n" + kentta_indeksi + ":" + kenttan_arvo + ",";
        });

        json_data += "}";


        console.log("Oma json data : " + json_data);

        console.log("Oikea JSON data : " + JSON.stringify(this.state.taulukko));


        //=================================


        //JSON tieto
        //JSON.stringify(this.state.taulukko);


        // var get_json_muuttuja = { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.taulukko) };
        // var get_json_muuttuja = { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(json_data) };
        //  var get_json_muuttuja = { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ json_data }) };
        var post_json_muuttuja = { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.taulukko) };


        fetch('http://localhost:8080/lomake1', post_json_muuttuja).then((resp) => {
            //fetch('http://localhost:8080/lomake1').then((resp) => {   
            return resp.json();
        }).then((r) => { 

            console.log("Fetch on suoritettu! " + JSON.stringify(r));
            //palvelin antaa JSON tiedoston //**************************************** */
            // this.state.kentta_data = r;

     // r - muutuja on JSON tieto palvelimelta, se on merkkijono taulukko joka voi kutsua r[indeksi], mutta se on kapseloitu "then" toteutuksen sisään eli sen kannattaa talentaa globaali muuttujaan.    

            r.forEach((json_elementti, elementin_indeksi) => {
                console.log("indeksi " + elementin_indeksi + " : " + json_elementti);
            });


            // ===========  tarkista tieto palvelimelta ja anna profiili lomake , jos sisänkirjautuminen onnistui =========
            if (r[0] == ".login..") {
                console.log("Sisänkirjautuminen onnistui");
                // this.state.kentta_data[0] = r[0]; 
                // this.state.kentta_data[2] = r[2];
                // this.state.kentta_data[1] = r[1];  


                this.state.kirjautuminen = true;
                this.state.profiili_taulukko.splice(0, this.state.profiili_taulukko.length); //tyhjennä kaikka elementit
                this.state.profiili_taulukko = r; //kirjoita uudet elementit JSON tiedostosta, joka tulee palvelimelta

                //kirjoita profiiliin solun sisällön
                //document.getElementById("k_profile").innerHTML = '****' + r[0] + r[1] + r[2];

            }
            //================================================================================================================

            this.setState(this.state);

        }).catch((get_error) => {
            console.log("Virhe ei yhteyttä palvelimeen ! " + get_error);
        });


        this.setState(this.state); //aseta state ja pääivitä React renderin näkymän

        /*
         console.log("Get kutsuttu.");
        //asynkrooninen get pyyntö
        fetch('http://localhost:8080/moi').then((resp) => {
             //console.log( "Fetch on aloitettu !" ); // tämä viesti ei näy ---> ei näy catch lohkossa, näkyy vain ennen return komentoa, mutta aiheuttaa virhettä tässä kohdassa (häiritse JSON palautusta)
            return resp.json();
        }).then((r) => {
            console.log("Fetch on suoritettu !"); //tulostetaan aina kun sivu on löytynyt
            console.log("R", r.body, r.test);
            this.setState({ test: r.body });
        }).catch((err) => {
            console.log("Sivua ei löytynyt suorita virhe poikkeus tänne !");
            this.setState({ error: true, errorMsg: "poop" });
            console.log("ERR", err);
        })

        console.log("Get JSON-tiedot : "+resp); //tulosta JSON-tiedon sisällön konsolissa
         */


    }






    //-----------------------------------------------
    //vanha (funktio ei käytössä)
    elementit_funktio() {


        return (<div> <tr> <td> {this.state.kentta_data[0]} :  </td> <td><input type="text" name="tx_nimi" id="i_nimi" style={this.state.kentta_tyyli} /> </td> </tr>
            <tr> <td> Sukunimi: </td> <td>  <input type="text" name="tx_snimi" id="i_snimi" style={this.state.kentta_tyyli} /> </td> </tr>
            <tr> <td>Ikä : </td> <td> <input type="text" name="tx_ika" id="i_ika" style={this.state.kentta_tyyli} /> </td> </tr>
            <tr> <td>Ammatti : </td> <td> <input type="text" name="tx_prof" id="i_prof" style={this.state.kentta_tyyli} /> </td> </tr>
            <tr> <td>Puh.nro : </td> <td> <input type="text" name="tx_phone " id="i_phone" style={this.state.kentta_tyyli} /> </td> </tr>
            <tr> <td>Sähköposti : </td> <td> <input type="text" name="tx_email" id="i_email" style={this.state.kentta_tyyli} /> </td> </tr>
        </div>);
    }



    //-----------------------------------------------

    piiraElementti_tekstikentta(elementin_nimi) {

        //tänne voi antaa elementin tyyppi, niin tekstikentän lisäksi voi laittaa muita html elementtejä

        return <input type="text" name={elementin_nimi} id={elementin_nimi} style={this.state.kentta_tyyli} />

        //  return   ( <div> <input type="text" style={this.state.kentta_tyyli} /> </div> );
    }


    //-----------------------------------------------

    piiraElementtiPudotusvalikko(elementin_nimi) {


        return <select name={elementin_nimi} id={elementin_nimi} style={this.state.kentta_tyyli}>
            <option value="admin"> Admin </option>
            <option value="helpdesk"> Helpdesk </option>
            <option value="software_developer"> Software Developer </option>
            <option value="manager"> Manager </option>
            <option value="security"> Security </option>
            <option value="boss"> Boss </option>
            <option value="unknown" selected> Unknown </option>
        </select>;
    }


    //-----------------------------------------------

    piiraElementtiRadioNappit(elementin_nimi) {

        return (<div>
            <table style={this.state.nappi_tyyli}>
                <tr> <td> Tietokoneet </td> <td> <input type="radio" name={elementin_nimi} id={elementin_nimi} style={this.state.kentta_tyyli} value="computers" /> </td> </tr>
                <tr> <td> Urheilu </td> <td> <input type="radio" name={elementin_nimi} id={elementin_nimi} style={this.state.kentta_tyyli} value="sports" /> </td> </tr>
                <tr> <td >Ruoka </td>  <td><input type="radio" name={elementin_nimi} id={elementin_nimi} style={this.state.kentta_tyyli} value="food" /> </td> </tr>
            </table>
        </div>);

    }

    //-----------------------------------------------

    naytaKentat() {

        var kentta = "";
        var elementit = [];

        elementit.splice(0, elementit.length); //poistaa kaikki elementit , jos on

        //forEeach silmukka
        // ------>  <tr> + <td> + teksti + </td> <td> piirra tektikenttä funktio + </td> <tr>
        this.state.kentta_data.forEach((kentta_data_muuttuja, kentta_data_indeksi) => {


            // elementit.push(<tr><td> {kentta_data_muuttuja} </td> <td> {this.piiraElementti_tekstikentta( this.state.kentta_nimet[kentta_data_indeksi])} </td> </tr>);
            if (kentta_data_indeksi != 3 && kentta_data_indeksi != 6) elementit.push(<tr><td> {kentta_data_muuttuja} </td> <td> {this.piiraElementti_tekstikentta(this.state.kentta_nimet[kentta_data_indeksi])} </td> </tr>);
            else if (kentta_data_indeksi == 3) elementit.push(<tr><td> {kentta_data_muuttuja} </td> <td> {this.piiraElementtiPudotusvalikko(this.state.kentta_nimet[kentta_data_indeksi])} </td> </tr>);
            else if (kentta_data_indeksi == 6) elementit.push(<tr><td> {kentta_data_muuttuja} </td> <td> {this.piiraElementtiRadioNappit(this.state.kentta_nimet[kentta_data_indeksi])} </td> </tr>);

        });

        return (<table style={this.state.table} > <div> {elementit} </div> </table>);


        //--- toimiva koodi -----------------

        /*
           var elementit = this.elementit_funktio();    
       
       return (
           <div >
               <table style={this.state.table} >
                   {elementit}
               </table>
           </div>
       );
       */

        //--------------------------------

    }

    //----------------------------------------------

    naytaNappi() {

        // var nappi_tyyli = { color : 'green' , fontSize: 30 };

        return (<div> <button onClick={() => this.lahetaGet()} style={this.state.nappi_tyyli} > Lähetä palvelimelle  </button> </div>);
        // return (<div> <button onClick={() => this.lahetaGet()}  > Lähetä palvelimelle  </button> </div>);
    }


    //-----------------------------------------------

    kirjaudu_ulos() {
        this.state.kirjautuminen = false;
        this.setState(this.state);
    }



    //-----------------------------------------------
    piira_profiili() {

        //tänne näytetään kirjautuneet käyttäjät

        var elementit = [];

        elementit.splice(0, elementit.length); //tyhjennä koko taulukko

        if (this.state.kirjautuminen) {

            this.state.profiili_taulukko.forEach((profiili_muuttuja, profiili_indeksi) => {

                // -----admin nappi, jos palvelimessa on vasttaava merkkijono, poikkeus data---
                //tämä vain "admin" käyttäjällä
                if (profiili_muuttuja == "ADMIN_TOOLS") {
                    elementit.push(<tr><td style={this.state.kentta_tyyli}> <button> {profiili_muuttuja} </button> </td></tr>);
                }
                //-----------------------------------------------------------------------------

                elementit.push(<tr><td style={this.state.kentta_tyyli}> {profiili_muuttuja} </td></tr>);
            });


        } else {
            elementit.push(<tr> <td> Profiili data ei löytynyt ! </td> </tr>);
        }

        return (<div> <p name="k_profile" id="k_profile"> <br /> <table style={this.state.table}> {elementit} </table>  </p> <button onClick={() => this.kirjaudu_ulos()} style={this.state.nappi_tyyli}> Kirjaudu ulos </button> </div>);
    }



    //-----------------------------------------------

    render() {


        var div_style = { margin: 'auto', width: "10%" };

        // const style_a = { td : { color : red }  };

        var taulun_tyyli = { borderStyle: 'solid', borderWidth: 5, borderColor: 'green' };
        //ylikirjoittaa kaikkia <table> ja <td> elementit uudella css tyylillä -------------> ei tehty ( käytän jokaista elementtiä kohden erikseen tyyliä)

        var sivu;

        if (!this.state.kirjautuminen) sivu = <div style={div_style} > <br /> <br /> {this.naytaKentat()} <br /> {this.naytaNappi()} </div>;
        else if (this.state.kirjautuminen) sivu = <p> kirjautuminen onnistui ! <br /> {this.piira_profiili()} </p>;

        return (sivu);
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
