# react-attribute-directives

> Attribute directives for React

[![NPM](https://img.shields.io/npm/v/react-attribute-directives.svg)](https://www.npmjs.com/package/react-attribute-directives) ![Minified Size](https://img.shields.io/bundlephobia/min/react-attribute-directives.svg?colorB=brightgreen)

## Install

```bash
npm install --save react-attribute-directives
```

## Usage

https://github.com/DBjelovuk/react-attribute-directives/tree/gh-pages

<br>

> #### highlight.directive.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

export default (WrappedComponent) => (color) =>
  function Highlight(props, ref) {
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(ref.current);
      node.style.backgroundColor = color;
    });
    return <WrappedComponent {...props} ref={ref} />;
  };
```
`ref` will always be provided as a param for functional directives. It may originate from a directive higher up the chain, so ensure to always pass it off to the wrapped component.

> #### alert-time-onclick.directive.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

export default (WrappedComponent) => () =>
  class AlertTimeOnClick extends React.Component {
    constructor(props) {
      super(props);
      this.ref = React.createRef();
    }

    componentDidMount() {
      const node = ReactDOM.findDOMNode(this.ref.current);
      node.addEventListener('click', () => {
        alert(new Date());
      });
    }

    render() { return <WrappedComponent {...this.props} ref={this.ref} />; }
  };
```

> #### inject-directives.jsx
```jsx
import ReactDirectives from 'react-attribute-directives';
import highlight from './highlight.directive';
import alertTimeOnClick from './alert-time-onclick.directive';

export default ReactDirectives({
  highlight,
  alertTimeOnClick
});
```

> #### my-component.jsx
```jsx
import React from 'react';
import InjectDirectives from '../directives/inject-directives';

class MyComponent extends React.Component {
  render() {
    return <div {...this.props} />;
  }
}
export default InjectDirectives(MyComponent);
```

> #### App.js
```jsx
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
```

## License

MIT © [DBjelovuk](https://github.com/DBjelovuk)
