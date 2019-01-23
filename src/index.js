import React from 'react';

export default function(directives) {

  return function(WrappedComponent) {

    return function InjectDirectives(props) {
      const initDirectives = (ref) => {
        for (const key in props) {
          if (props.hasOwnProperty(key) && typeof directives(ref)[key] === 'function') {
            directives(ref)[key](props[key]);
          }
        }
      }
      const handleRef = (r) => initDirectives(r);
      const isFunctional = !WrappedComponent.prototype.render;
      const refProp = { [isFunctional ? 'directiveRef' : 'ref']: handleRef };

      return <WrappedComponent {...refProp} {...props} />;
    }
  }
}
