import React from './react/react';
import Hello from './Hello';
import Foo from './Foo';

const App = React.createElement('div', null, `test`,React.createElement(Foo, {onClick: () => {alert(1)}, name: 'Isa en Nora'}, null), React.createElement(Hello, {name: 'steven'}, null));

React.render(App, document.getElementById('root'));
