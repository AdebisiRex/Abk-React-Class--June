import React, { Component } from "react";

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adebisi",
      number: 0,
    };
  }

  componentDidMount() {
    console.log("I am mounted");
  }

  componentWillUnmount(e) {
    console.log("Component Unmount");
    if(confirm("Are you sure you want to leave")){
        return 
    }else{
        return
    }
  }

  increaseNumber = () => {
    let n = this.state.number + 1;

    this.setState({ number: n });
  };

  render() {
    return (
      <div>
        This is the class based component {this.state.name}
        <h1>{this.state.number}</h1>
        <ul>
          {this.props.taskArray.map(item=>{
            <li>{item.taskname}</li>
          })}
        </ul>
        <button onClick={this.increaseNumber}> Increase Number</button>
      </div>
    );
  }
}

export default ClassBased;
