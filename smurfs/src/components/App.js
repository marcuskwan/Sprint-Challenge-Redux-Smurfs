import React, { Component } from "react";
import "./App.css";
// import connect method
import { connect } from "react-redux";
// import action creators
import { getSmurfs, addNewSmurf } from "../actions";
// import withRouter
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    // return <div className="App">Keep it up</div>;
    return (
      <div className="App">
        {this.props.smurfsArray.map(smurfObject => (
          <div key={smurfObject.id} className="smurf">
            <div>{smurfObject.name}</div>
            <div>{smurfObject.age}</div>
            <div>{smurfObject.height}</div>
            <div>{smurfObject.id}</div>
          </div>
        ))}
        <form onSubmit={this.addNewSmurfSubmitHandler}>
          <input
            onChange={this.changeHandler}
            name="name"
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.changeHandler}
            name="age"
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.changeHandler}
            name="height"
            placeholder="height"
            value={this.state.height}
          />
          <button>Add New Friend</button>
        </form>
      </div>
    );
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addNewSmurfSubmitHandler = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addNewSmurf(newSmurf);
  };
}

const mapStateToProps = state => {
  // console.log("inside mstp 1", state);
  return {
    smurfsArray: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addNewSmurf }
)(App);
