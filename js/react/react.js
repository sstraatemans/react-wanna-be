const React = () => {
  const setElement = (element, children) => {
    if (isClass(element)) {
      const component = new element();
      return component.render();
    } else if (typeof(element) === 'function') {
     //this creates the option for stateless components (functions)
      return element();
    } else {
      const elm = document.createElement(element);
      children.forEach(child => {
        if (typeof(child) === 'object') {
          elm.appendChild(child);
        } else {
          elm.innerHTML += child;
        }
      });
      return elm;
    }
  }

  //check if the object fiven is a class
  const isClass = (func) => {
    return typeof func === 'function'
      && /_class\S+/i.test(func.toString());
  }

  const createElement = (el, props, ...children) => {
    return setElement(el, children);
  }

  const render = (el, domEl) => {
    domEl.appendChild(el);
  }

  return {
    createElement,
    render,
  };
};

export default React();
