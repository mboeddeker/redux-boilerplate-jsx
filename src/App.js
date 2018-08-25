// @flow
import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {changeText, getAsyncNumber} from "./redux/actions";
import {connect} from "react-redux";
import type {MainState} from "./redux/reducer/RootReducer";

interface AppProps {
  valueText?: string;
  changeText?: () => void;
  asyncNumber?: () => void;
  valueNumber?: number;
}

class App extends Component<AppProps, {}> {
  render() {
    console.log(this);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reacts</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>{this.props.valueText}</code> and save to
          reload in {this.props.valueNumber}.
        </p>
        <button onClick={this.props.changeText}>Please</button>
        <button onClick={this.props.asyncNumber}>Number</button>
      </div>
    );
  }
}
/* Here I define some props, with the value of an redux state, like the state
*  from the Change Text Reducer, so I don't need to define a state in the component.
*  I can do that if I want, but in this example it's okay. */
const mapStateToProps = (state: MainState) => {
  return {
    valueText: state.changeText.valueText,
    valueNumber: state.asyncNumber.number
  };
};
/* Now, if I need some actions, I defined before, I can map them to the props to, like
*  the state before. Pretty cool and really simple. But I have to import them. */
const mapDispatchToProps = dispatch => {
  return {
    changeText: () => {
      dispatch(changeText("please"));
    },
    asyncNumber: () => {
      dispatch(getAsyncNumber());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// An Idea for rest requests https://blog.tylerbuchea.com/super-simple-redux-thunk-example/
