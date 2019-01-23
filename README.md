# react-attribute-directives

> Attribute directives for React

[![NPM](https://img.shields.io/npm/v/react-attribute-directives.svg)](https://www.npmjs.com/package/react-attribute-directives) ![Minified Size](https://img.shields.io/bundlephobia/min/react-attribute-directives.svg?colorB=brightgreen)

## Install

```bash
npm install --save react-attribute-directives
```

## Usage

> #### app-highlight.directive.jsx
```jsx
import ReactDOM from 'react-dom';

export default (component) => (color) => {
  const node = ReactDOM.findDOMNode(component);
  node.style.backgroundColor = color;
};
```

> #### inject-directives.jsx
```jsx
import ReactDirectives from 'react-attribute-directives';
import appHighlight from './app-highlight.directive';

export default ReactDirectives((component) => ({
  appHighlight: appHighlight(component)
}));

```

> #### my-component.jsx
```jsx
import React from 'react';
import InjectDirectives from '../directives/inject-directives';

class MyComponent extends React.Component {
  render() {
    return <div />;
  }
}
export default InjectDirectives(MyComponent);
```

> #### my-functional-component.jsx
```jsx
import React from 'react';
import InjectDirectives from '../directives/inject-directives';

function MyFunctionalComponent(props) {
  return <div ref={props.directiveRef} />; // Explicit ref required
}
export default InjectDirectives(MyFunctionalComponent);
```

> #### App.js
```jsx
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
