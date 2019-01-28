import React from 'react';

export default function(directives) {

  return function InjectDirectives(WrappedComponent) {

    return function(props) {
      for (const key in props) {
        const directive = directives[key];
        if (props.hasOwnProperty(key) && typeof directive === 'function') {
          const value = props[key] !== true ? props[key] : null
          let DirectiveComponent = directive(WrappedComponent)(value);

          props = { ...props };
          delete props[key];

          if (!DirectiveComponent.prototype.render) {
            DirectiveComponent = (DirectiveComponent =>
              React.forwardRef((props, ref) => {
                if (!ref || typeof ref !== 'object') {
                  ref = React.createRef();
                }
                const WrappedDirective = React.forwardRef(DirectiveComponent);
                return <WrappedDirective {...props} ref={ref} />;
              }))(DirectiveComponent);
          }

          return InjectDirectives(DirectiveComponent)(props);
        }
      }
      const ref = React.createRef();
      return <WrappedComponent {...props} ref={ref} />;
    }
  }
}
