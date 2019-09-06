import React, { Component } from 'react';
import View from './components/View/View';
import Loading from './components/View/Loading';
import Footer from './components/View/Footer';

class App extends Component {
    state = {
        quots: [],
        currentQuots: {}
    }

    colorList = [
        '#0079bf',
        '#d29034',
        '#519839',
        '#b04632',
        '#89609e',
        '#cd5a91',
        '#4bbf6b',
        '#00aecc'
    ];

    handleRandomQuots = () => {
        const quotsLength = this.state.quots.length;
        const randNumbar = Math.floor(Math.random() * quotsLength)
        this.setState(() => ({ currentQuots: this.state.quots[randNumbar] }));

        const randomColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
        document.body.style.cssText = `
      color: ${randomColor}; 
      background-color: ${randomColor}`;
    };

    componentDidMount = () => {
        fetch("https://my-json-server.typicode.com/amiamitswe/myjson/quots")
            .then(response => response.json())
            .then(data => this.setState({ quots: data }))
            .then(() => this.handleRandomQuots());
        console.log("Mount");
    }

    render() {
        return (
            <div>
                {(this.state.quots.length !== 0) ?
                    <View
                        currentQuots={this.state.currentQuots}
                        randomQuots={this.handleRandomQuots}
                    /> : <Loading />}

                    <Footer />
            </div>
        );
    }

}
export default App;