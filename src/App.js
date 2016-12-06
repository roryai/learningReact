import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  // ReactDOM.render(
  //   element2,
  //   document.getElementById('root')
  // );

  ReactDOM.render(
    setInterval(tick, 1000),
    document.getElementById('root')
  );


};

function formatName(user) {
  return user.firstName + " " + user.lastName;
};

const user = {
  firstName: 'Rory',
  lastName: 'Aitchison'
};

const element = (
  <h1 className="App">
    Hello, {formatName(user)}!
  </h1>
);

const element2 = (
  <div className="App">Hello World!</div>
);



function tick() {
  const clock = (
    <div>
      <h1>The time, yo</h1>
      <h2> The time now is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    clock,
    document.getElementById('root')
  );
};
setInterval(tick, 1000)

ReactDOM.render(
  element,
  document.getElementById('root')
);

export default App;
