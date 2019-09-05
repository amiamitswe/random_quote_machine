import React, { Component } from 'react';
import View from './components/View/View';

class App extends Component {
  state = {
    quots: [
    {
        writer: "Thomas Edison",
        title: "Genius is one percent inspiration and ninety-nine percent perspiration."
    },
    {
        writer: "Yogi Berra",
        title: "You can observe a lot just by watching."
    },
    {
        writer: "Abraham Lincoln",
        title: "A house divided against itself cannot stand."
    },
    {
        writer: "Johann Wolfgang von Goethe",
        title: "Difficulties increase the nearer we get to the goal."
    },
    {
        writer: "Byron Pulsifer",
        title: "Fate is in your hands and no one elses"
    },
    {
        writer: "Lao Tzu",
        title: "Be the chief but never the lord."
    },
    {
        writer: "Carl Sandburg",
        title: "Nothing happens unless first we dream."
    },
    {
        writer: "Aristotle",
        title: "Well begun is half done."
    },
    {
        writer: "Yogi Berra",
        title: "Life is a learning experience, only if you learn."
    },
    {
        writer: "Margaret Sangster",
        title: "Self-complacency is fatal to progress."
    },
    {
        writer: "Buddha",
        title: "Peace comes from within. Do not seek it without."
    },
    {
        writer: "Byron Pulsifer",
        title: "What you give is what you get."
    },
    {
        writer: "Iris Murdoch",
        title: "We can only learn to love by loving."
    },
    {
        writer: "Karen Clark",
        title: "Life is change. Growth is optional. Choose wisely."
    },
    {
        writer: "Wayne Dyer",
        title: "You'll see it when you believe it."
    },
    {
        writer: "Lao Tzu",
        title: "To lead people walk behind them."
    },
    {
        writer: "William Shakespeare",
        title: "Having nothing, nothing can he lose."
    },
    {
        writer: "Henry J. Kaiser",
        title: "Trouble is only opportunity in work clothes."
    },
    {
        writer: "Publilius Syrus",
        title: "A rolling stone gathers no moss."
    },
    {
        writer: "Napoleon Hill",
        title: "Ideas are the beginning points of all fortunes."
    },
    {
        writer: "Donald Trump",
        title: "Everything in life is luck."
    },
    {
        writer: "Lao Tzu",
        title: "Doing nothing is better than being busy doing nothing."
    },
    {
        writer: "Benjamin Spock",
        title: "Trust yourself. You know more than you think you do."
    },
    {
        writer: "Confucius",
        title: "Study the past, if you would divine the future."
    },
    {
        writer: "Sigmund Freud",
        title: "From error to error one discovers the entire truth."
    },
    {
        writer: "Benjamin Franklin",
        title: "Well done is better than well said."
    },
    {
        writer: "Ella Williams",
        title: "Bite off more than you can chew, then chew it."
    }
  ],
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
    this.setState(() => ({currentQuots: this.state.quots[randNumbar]}));

    const randomColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
    document.body.style.cssText = `
      color: ${randomColor}; 
      background-color: ${randomColor}`;
  };

  componentDidMount = () => {
    this.handleRandomQuots();
    console.log('Mount');
  }

  render() {
    return (
      <View
        currentQuots = {this.state.currentQuots}
        randomQuots = {this.handleRandomQuots}
      />
    );
  }
  
}
export default App;