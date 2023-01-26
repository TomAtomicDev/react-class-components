import React from "react";

export default class App2 extends React.Component {
    render(){
        return (
            <div>
                <Header username="Tommy"/>
                <Greating />
            </div>
        )
    } 
};

class Header extends React.Component {
    render() {
    return (
        <header>
            <p>Welcome,{this.props.username} </p>
        </header>
    )}
};

class Greating extends React.Component {
  state = {
    morningMax: 12,
    afternoonmax: 18
  }
  render(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = 'night';

    if (hours < this.state.morningMax) { timeOfDay = 'morning'};
    if (hours >=this.state.morningMax  &&  hours <this.state.afternoonmax){timeOfDay = 'afternoon'};

    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}


