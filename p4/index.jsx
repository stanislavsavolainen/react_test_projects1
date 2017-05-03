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
        }
    }

    //------------------------------------------------------------

    lueTiedosto(uusi_tapahtuma) {

        //lue tiedosto ja tallenna arvo statiin
        var reader = new FileReader();
        reader.onload = () => {
            var text = reader.result;
            console.log(text);
            this.state.tiedoston_teksti = text;
            this.setState(this.state); //tallentaa muistiin ja päivittää React komponentin näyttön
        };

        //parametrina tiedoston taulukko tekstikentästä, ensimmäinen tiedosto
        reader.readAsText( uusi_tapahtuma.target.files[0]);
    }

    //-------------------------------------------------------------

    nayta_tiedot() {

        //uusi viesti alkaa merkillä   *

        var taulukko = this.state.tiedoston_teksti.split("*");
        const tieto_elementit = [];
        var taulun_tyyli = { borderStyle: 'solid', borderWidth: 5, borderColor: 'green' };
        var solun_tyyli = { borderStyle: 'solid', borderWidth: 3, borderColor: 'green' };

        //käy läpi kaikki elementit 
        taulukko.forEach((elementin_arvo, taulukko_indx) => {
            tieto_elementit.push(<tr> <td style={solun_tyyli}> {elementin_arvo} </td> <td style={solun_tyyli}> <button onClick={() => this.poista_tieto(taulukko_indx) } > x </button> </td> </tr>);
        });

        return (<div> <p> Elementien lukumäärä : {taulukko.length} <br /> <table style={taulun_tyyli} > {tieto_elementit} </table> </p> </div>);
    }

    //-------------------------------------------------------------

    kirjoita_uusi_tieto() {

        var tekstin_data = document.getElementById("teksti_kentta_id").value; // lue arvo tekstikentästä

        this.state.tiedoston_teksti += "*" + tekstin_data;

        //päivitä näkymä
        this.setState(this.state); //tallentaa muistiin ja päivittää React komponentin näyttön

    }

    //-------------------------------------------------------------

    tallenna_tiedosto() {

        var file = new Blob([this.state.tiedoston_teksti], { type: "text/plain" });

        //tee linkki tiedostoon ---> luo tallennusnimen tiedoston tallentamista varten
        a.href = URL.createObjectURL(file);
        a.download = document.getElementById("tiedoston_nimi_kentta_id").value; // lue tiedoston nimi tekstikentästä;

    }

    //-------------------------------------------------------------

    poista_tieto( poisto_indeksi ) {

        var poisto_taulukko = this.state.tiedoston_teksti.split("*");

        poisto_taulukko.splice(poisto_indeksi, 1); //poista elementti ensimmäinen parametri indeksi ja toinen poiste
        this.state.tiedoston_teksti = poisto_taulukko.join("*");
        this.setState(this.state);

    }

    //-------------------------------------------------------------

    render() {

        return (<div>
            <input type='file' accept='text/plain' onChange={(tapahtuma) => this.lueTiedosto(tapahtuma)} />
            <p> Hello React!  {this.state.tiedoston_teksti} </p>
            <br />
            <p> Anna uusi elementti </p> <input type="text" name="teksti_kentta" id="teksti_kentta_id" /><button onClick={() => this.kirjoita_uusi_tieto()}> Lisää elementti </button>

            {this.nayta_tiedot()}
            <p> Tallenna tiedosto : </p> <br /> <br /><input type="text" name="tiedoston_nimi_kentta" id="tiedoston_nimi_kentta_id" /><button onClick={() => this.tallenna_tiedosto()}> Tallenna tiedosto </button>
            <a href="" id="a"> Tallenna data </a>

        </div>);
    }

}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
