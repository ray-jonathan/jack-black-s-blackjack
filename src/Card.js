import React from 'react';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }
    componentDidMount(){
    const newCard = this.props.randoCard();
    // console.log(newCard);
    this.setState({
        value : newCard
    });
    this.props.handsyHandler(newCard);
    this.props.dropCardFromDeck(newCard);
    
    }

    render(props){
        return(<div>
            <p>{this.state.value || null }</p>
        </div>)
    }
}
export default Card;