import { useState } from 'react';
import './Dpp.css'

const N = 5;

function DiningPhilosophers() {
  const [state, setState] = useState(new Array(N).fill('thinking'));
  const [actions, setActions] = useState([]);

  const pickup = (i) => {
    setState((prev) => {
      const newState = [...prev];
      newState[i] = 'hungry';
      return newState;
    });
    test(i);
  };

  const putdown = (i) => {
    setState((prev) => {
      const newState = [...prev];
      newState[i] = 'thinking';
      return newState;
    });
    test((i + N - 1) % N);
    test((i + 1) % N);
  };

  const test = (i) => {
    if (state[i] === 'hungry' && state[(i + N - 1) % N] !== 'eating' && state[(i + 1) % N] !== 'eating') {
      setState((prev) => {
        const newState = [...prev];
        newState[i] = 'eating';
        return newState;
      });
      setActions((prev) => [...prev, `Philosopher ${i + 1} is eating`]);
    }
  };

  return (
    <div className="container2">
      <h1>Dining Philosophers</h1>
      <div id="table">
        {Array.from({ length: N }, (_, i) => (
          <div key={i} className="chopstick"></div>
        ))}
        {Array.from({ length: N }, (_, i) => (
          <div key={i} id={`philosopher${i + 1}`} className={`philosopher ${state[i]}`}>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        ))}
      </div>
      <div className="info">
        <p>State:</p>
        <ul id="state">
          {state.map((s, i) => (
            <li key={i}>Philosopher {i + 1}: {s}</li>
          ))}
        </ul>
        <p>Actions:</p>
        <ul id="actions">
          {actions.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
      <button className="btn1" onClick={() => pickup(0)}>Pickup 1</button>
      <button className="btn1" onClick={() => pickup(1)}>Pickup 2</button>
      <button className="btn1" onClick={() => pickup(2)}>Pickup 3</button>
      <button className="btn1" onClick={() => pickup(3)}>Pickup 4</button>
      <button className="btn1" onClick={() => pickup(4)}>Pickup 5</button>
      <button className="btn2" onClick={() => putdown(0)}>Putdown 1</button>
      <button className="btn2" onClick={() => putdown(1)}>Putdown 2</button>
      <button className="btn2" onClick={() => putdown(2)}>Putdown 3</button>
      <button className="btn2" onClick={() => putdown(3)}>Putdown 4</button>
      <button className="btn2" onClick={() => putdown(4)}>Putdown 5</button>
    </div>
  );
}

export default DiningPhilosophers;
