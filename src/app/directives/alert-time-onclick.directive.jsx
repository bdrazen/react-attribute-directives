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
  }