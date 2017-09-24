const React = () => {
  const setElement = (element, children) => {
    const elm = document.createElement(element);
    elm.innerHTML = children.join(' ');
    return elm;
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
