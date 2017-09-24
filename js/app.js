import React from './react/react';
import Hello from './Hello';
import Foo from './Foo';

const App = React.createElement('div', null, `test`,React.createElement(Foo, null, null), React.createElement(Hello, null, null));

React.render(App, document.getElementById('root'));
