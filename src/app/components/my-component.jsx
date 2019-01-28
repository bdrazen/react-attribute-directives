import React from 'react';
import InjectDirectives from '../directives/inject-directives';

class MyComponent extends React.Component {
  render() {
    return <div {...this.props} />;
  }
}
export default InjectDirectives(MyComponent);
