import Component from './react.component';

const React = () => {
  const setElement = (element, props = {}, children = []) => {
    if (isClass(element)) {
      return classHandler(element, props, children);
    } else if (isStateLess(element)) {
        return element(props);
    } else if (typeof(element) === 'function') {
     //this creates the option for stateless components (functions)
      return element();
    } else {
      return HtmlElmHandler(element, props, children);
    }
  }

  const classHandler = (element, props, children) => {
    const component = new element(props);
    return component.render();
  }

  const HtmlElmHandler = (element, props, children) => {
    const elm = document.createElement(element);
    children.forEach(child => {
      if (typeof(child) === 'object') {
        elm.appendChild(child);
      } else {
        elm.innerHTML += child;
      }
    });
    
    Object.keys(props).forEach(prop => {
      if (/^on.*$/.test(prop)) {
        elm.addEventListener(prop.substring(2).toLowerCase(), props[prop]);
      } else {
        elm.setAttribute(prop, props[prop]);
      }
    });
    return elm;
  }

  //check if the object fiven is a class
  const isClass = (func) => {
    return typeof func === 'function'
      && /_class\S+/i.test(func.toString());
  }

  const isStateLess = (element) => {
    return !isClass(element) && typeof element === 'function'
  }

  const createElement = (el, props = {}, ...children) => {
    if(!props) props = {};
    if(!children) children = [];
    return setElement(el, props, children);
  }

  const render = (el, domEl) => {
    domEl.appendChild(el);
  }

  return {
    createElement,
    render,
    Component,
  };
};

export default React();
