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
setInterval(tick, 1000)

// function tick() {
//   const clock = (
//     <div>
//       <h1>The time, yo</h1>
//       <h2> The time now is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     clock,
//     document.getElementById('root')
//   );
// };


// const App = () => {

// };
// export default App;
