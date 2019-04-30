import React from 'react';
import './App.css';
import Card from './Card';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deck: ['s2' ,'s3' ,'s4' ,'s5' ,'s6' ,'s7' ,'s8' ,'s9' ,'s10','sJ' ,'sQ' ,'sK' ,'sA' ,'h2' ,'h3' ,'h4' ,'h5' ,'h6' ,'h7' ,'h8' ,'h9' ,'h10','hJ' ,'hQ' ,'hK' ,'hA' ,'c2' ,'c3' ,'c4' ,'c5' ,'c6' ,'c7' ,'c8' ,'c9' ,'c10','cJ' ,'cQ' ,'cK' ,'cA' ,'d2' ,'d3' ,'d4' ,'d5' ,'d6' ,'d7' ,'d8' ,'d9' ,'d10','dJ' ,'dQ' ,'dK' ,'dA' ],
      player : [],
      numOfCards: [1]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.numOfCards.map((item, i) => <Card key={i} playerCards={this.state.player} dropCardFromDeck={this._removeFromDeck} randoCard={this._randomCardFromDeck} handsyHandler={this._setPlayerHandler}/>)}
        <button onClick={this._addsCard}>+</button>
        {/* {this.state.player ? <div>{this.state.player.map((card, i) => <p key={i}>{card}</p>)}</div> : null } */}
      </div>
    );
  }

  _removeFromDeck = (cardName) => {
    // removes card value from array in deck
    const filteredDeck = this.state.deck.filter(card => card!==cardName);
    this.setState({
      deck:filteredDeck
    });
  }

  componentDidMount(){
    this._addsCard()
  }

  _addsCard = () => {
    this.setState({
      numOfCards: this.state.numOfCards.concat(1)
    })
  }

  _setPlayerHandler = (newCard) => {
    this.setState({
      player: this.state.player.concat(newCard)
    }, () => console.log(newCard))
  }

  _randomCardFromDeck = () => {
    const theCard = this.state.deck[Math.floor(Math.random() * Math.floor(this.state.deck.length)) + 1]
    // this.setState({
    //   player: this.state.player.concat([theCard])
    // });
    return theCard;
  }
}

export default App;


      // deck : {
      //   's2' :2,
      //   's3' :3,
      //   's4' :4,
      //   's5' :5,
      //   's6' :6,
      //   's7' :7,
      //   's8' :8,
      //   's9' :9,
      //   's10':10,
      //   'sJ' :10,
      //   'sQ' :10,
      //   'sK' :10,
      //   'sA' :11,
      //   'h2'  :2,
      //   'h3'  :3,
      //   'h4'  :4,
      //   'h5'  :5,
      //   'h6' :6,
      //   'h7' :7,
      //   'h8' :8,
      //   'h9' :9,
      //   'h10':10,
      //   'hJ' :10,
      //   'hQ' :10,
      //   'hK' :10,
      //   'hA' :11,
      //   'c2'  :2,
      //   'c3'  :3,
      //   'c4'  :4,
      //   'c5'  :5,
      //   'c6' :6,
      //   'c7' :7,
      //   'c8' :8,
      //   'c9' :9,
      //   'c10':10,
      //   'cJ' :10,
      //   'cQ' :10,
      //   'cK' :10,
      //   'cA' :11,
      //   'd2'  :2,
      //   'd3'  :3,
      //   'd4'  :4,
      //   'd5'  :5,
      //   'd6' :6,
      //   'd7' :7,
      //   'd8' :8,
      //   'd9' :9,
      //   'd10':10,
      //   'dJ' :10,
      //   'dQ' :10,
      //   'dK' :10,
      //   'dA' :11
      // },