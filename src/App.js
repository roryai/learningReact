import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};

const welcomeName = <Welcome name="Rory" />;

function Clock(props) {
  return (
    <div>
      <h1>The time is {props.date.toLocaleTimeString()}</h1>;
    </div>
  )
};

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);















// const App = () => {

// };
// export default App;
