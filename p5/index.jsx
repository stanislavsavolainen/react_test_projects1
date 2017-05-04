import React from 'react';
import { render } from 'react-dom';

//React, react_p5 projekti
//./node_modules/.bin/webpack -d 


class App extends React.Component {

	//ok, muutos tapahtunut.

    //-----------------------------------------------------

    evasteiden_muutos(){

        var avain = document.getElementById("evasteet_kentta1_id").value;
        var arvo = document.getElementById("evasteet_kentta2_id").value;

        document.cookies = avain + "=" + arvo;

    }

    //-----------------------------------------------------

    render() {

         //evästeet = cookies
        //document.cookie = "nimi=user1;tyo=helpdesk;ika=50;"; //evästeiden tallentaminen

        document.cookie = "nimi=user1";
        document.cookie = "tyo=helpdesk";
        document.cookie = "ika=50";

        
        var x = document.cookie; //evästteiden luku

       // return <p> Hello React! <br /><br /> {x} </p>;

        return( <div> 
                <p> Näytä evästeet : </p>
                {x}
                <br /><br /> Evästeiden avain: <input type="text" id="evasteet_kentta1_id" />
                <br /> Evästeiden arvo:  <input type="text" id="evasteet_kentta2_id" />
               <br /> <button> Paina eväste nappia  </button>
        </div>);

        //return <p> Hello React!</p>;
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
