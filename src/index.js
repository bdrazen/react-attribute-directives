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

      return <WrappedComponent ref={handleRef} directiveRef={handleRef} {...props} />;
    }
  }
}
