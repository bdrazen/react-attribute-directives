import React from 'react';
import ReactDOM from 'react-dom';

export default (WrappedComponent) => (color) =>
  function Highlight(props, ref) {
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(ref.current);
      node.style.backgroundColor = color;
    });
    return <WrappedComponent {...props} ref={ref} />;
  }
