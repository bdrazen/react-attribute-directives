import React, { Component } from 'react';
import './App.css';
import MyComponent from './app/components/my-component';

class App extends Component {
  state = {
    componentColor: 'red'
  }

  toggleComponentColor = () => {
    this.setState({ componentColor: this.state.componentColor === 'red' ? 'blue' : 'red' });
  }

  render() {
    return (
      <div className="App">
        <MyComponent
          highlight={this.state.componentColor}
          alertTimeOnClick
          onClick={this.toggleComponentColor}
        />
      </div>
    );
  }
}
export default App;
