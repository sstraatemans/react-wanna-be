import React from './react/react';
let helloWorld = React.createElement('div', null, `Hello World`);
console.log(helloWorld);
React.render(helloWorld, document.getElementById('root'));
