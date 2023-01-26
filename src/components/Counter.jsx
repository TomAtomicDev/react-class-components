import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  setCount = () => {
    this.setState( prevState => {
      return {
        count: prevState.count +1
      }
    })
  }

  render() {
    return (
      <button onClick={() => this.setCount()}>
        count is {this.state.count}
      </button>
    )
  }
};

export default Counter;