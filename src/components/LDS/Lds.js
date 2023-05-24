import React, { useState } from 'react';
import './Lds.css';

function Lds() {
  const [requests, setRequests] = useState([]);
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); 

  const addRequest = () => {
    const newRequest = Math.floor(Math.random() * 200); 
    const newRequests = [...requests, newRequest].sort((a, b) => a - b); 
    setRequests(newRequests);
  };

  const handleStart = () => {
    const newQueue = [...requests];
    if (direction === 1) {
      newQueue.push(199);
    } else {
      newQueue.unshift(0);
    }
    setQueue(newQueue);
    setCurrent(newQueue.shift());
    setQueue(newQueue);
  };

  const handleNext = () => {
    if (queue.length === 0) return;
    const newCurrent = queue.shift();
    setQueue(queue);
    setCurrent(newCurrent);
  };

  const handleStop = () => {
    setRequests([]);
    setQueue([]);
    setCurrent(0);
    setDirection(1);
  };

  const handleDirectionChange = () => {
    setDirection(direction === 1 ? -1 : 1);
  };

  return (
    <div className="container3">
      <h1>Look/C-Look Disk Scheduling Algorithm</h1>
      <table>
        <thead>
          <tr>
            <th>Request</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request}</td>
              <td>{index}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="queue">
        {queue.map((request, index) => (
          <div key={index}>{request}</div>
        ))}
      </div>
      <div id="disk">
        <div className="current" style={{ top: `${current}px` }}></div>
        {requests.map((request, index) => (
          <div
            key={index}
            className="request"
            style={{ top: `${request}px`, backgroundColor: index % 2 === 0 ? '#f7f7f7' : '#e9e9e9' }}
          ></div>
        ))}
      </div>
      <div id="footer">
        <button className='button3' onClick={handleStart}>Start</button>
        <button className='button3' onClick={handleNext}>Next</button>
        <button className='button3' onClick={addRequest}>Add Request</button>
        <button className='button3' onClick={handleDirectionChange}>
          {direction === 1 ? 'Go Down' : 'Go Up'}
        </button>
        <button className='button3' onClick={handleStop}>Reset</button>
      </div>
    </div>
  );
}

export default Lds;
