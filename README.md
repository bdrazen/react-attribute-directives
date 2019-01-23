# react-attribute-directives

> Attribute directives for React

[![NPM](https://img.shields.io/npm/v/react-attribute-directives.svg)](https://www.npmjs.com/package/react-attribute-directives) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-attribute-directives
```

## Usage

```jsx
// app-highlight.directive.jsx
import ReactDOM from 'react-dom';

export default (component) => (color) => {
  const node = ReactDOM.findDOMNode(component);
  node.style.backgroundColor = color;
};
```

```jsx
// inject-directives.jsx
import appHighlight from './app-highlight.directive';
import ReactDirectives from 'react-attribute-directives';

export default ReactDirectives((component) => ({
  appHighlight: appHighlight(component)
}));

```

```jsx
// my-component.jsx
import React from 'react';
import InjectDirectives from '../directives/inject-directives';

class MyComponent extends React.Component {
  render() {
    return <div />;
  }
}
export default InjectDirectives(MyComponent);
```

```jsx
// my-functional-component.jsx
import React from 'react';
import InjectDirectives from '../directives/inject-directives';

function MyFunctionalComponent(props) {
  return <div ref={props.directiveRef} />; // Explicit ref required
}
export default InjectDirectives(MyFunctionalComponent);
```

```jsx
// App.js
import React, { Component } from 'react';
import MyComponent from './app/components/my-component';
import MyClassComponent from './app/components/my-class-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent appHighlight='red' />
        <MyFunctionalComponent appHighlight='blue' />
      </div>
    );
  }
}
export default App;
```

## License

MIT © [DBjelovuk](https://github.com/DBjelovuk)
