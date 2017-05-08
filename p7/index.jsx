import React from 'react';
import { render } from 'react-dom';

//React, react_p7 projekti

////./node_modules/.bin/webpack -d 



class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "",
            error: false
        };
    }

    render() {
        return <div>xxx {this.props.poop} xxxx</div>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "",
            error: false
        };
    }

    sendPost() {
        fetch('http://localhost:8080/process_post', { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({a: 1, b: 2}) }).then((resp) => {
            
            console.log("Suorita POST lähetys ")
            console.log("RESP", resp.body);
        })
    }

    sendGet() {

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

    }

    render() {

        // return <p> Hello React!</p>;
        console.log("ERR", this.state);
        const err = this.state.error ? "Error" : "";
        return (<div>
            <button onClick={() => this.sendGet()}> Laeta get </button><span>{this.state.test}</span>
            <button onClick={() => this.sendPost()}> Laeta post </button><span>{this.state.test}</span>
            <span style={{ color: 'red' }}>{ err }</span>
            <App2 poop={this.state.test} />
        </div>);
    }
}
render(<App />, document.getElementById('app'));
console.log('Hello World!');
