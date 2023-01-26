import React from "react";

class App3 extends React.Component {
  constructor (){
    super();
    this.state = {
      count:1,
      character: {}
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this)
  }

  add () {
    this.setState( prevState => {
      return {
        count: prevState.count +1,
      }
    })
  }

  subtract () {
    this.setState( prevState => {
      return {
        count: prevState.count -1,
      }
    })
  }

  getSWChar (id) {
     fetch(`https://swapi.dev/api/people/${id}`)
      .then(res => res.json())
      .then(data => this.setState({character:data}))
      
  }

  async componentDidMount () {
    console.log("Mount")
    this.getSWChar(this.state.count);

  }

  componentDidUpdate (prevProps, prevState) {
    console.log("update");
    if (prevState.count !== this.state.count) {
      this.getSWChar(this.state.count);
    }
    
  }


  render (){
    console.log("render( )")
    return(
      <div className="counter">
        <button onClick={this.subtract} >-</button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button onClick={this.add}>+</button>
        <h2>{this.state.character.name || "Loading..."}</h2>
      </div>
    )
  }
};

export default App3;