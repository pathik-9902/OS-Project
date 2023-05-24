import React, { useState } from 'react';
import './Fifo.css'

function Fifo() {
  const [memory, setMemory] = useState([]);
  const [page, setPage] = useState('');
  const [pageFaults, setPageFaults] = useState(0);
  const [frameSize, setFrameSize] = useState(3);

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const handleFrameSizeChange = (e) => {
    setFrameSize(e.target.value);
    setMemory([]);
    setPage('');
    setPageFaults(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (memory.includes(page)) {
      return;
    }

    if (memory.length < frameSize) {
      setMemory([...memory, page]);
    } else {
      setMemory([...memory.slice(1), page]);
      setPageFaults(pageFaults + 1);
    }

    setPage('');
  };

  return (
    <div className="App">
      <h1>FIFO Page Replacement Algorithm Simulator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Page:
          <input type="text" value={page} onChange={handlePageChange} />
        </label>
        <label>
          Frame Size:
          <select value={frameSize} onChange={handleFrameSizeChange}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Memory: {memory.join(', ')}</p>
      <p>Page Faults: {pageFaults}</p>
      <br />
      <br />
      <br />
      <div class="table-container"><table>
        <thead>
          <tr>
            <th>Page</th>
            <th>Memory</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>(Empty)</td>
            <td>Initial state</td>
          </tr>
          <tr>
            <td>{page}</td>
            <td>{memory.join(', ')}</td>
            <td>
              {memory.includes(page) ? 'Hit' : 'Miss'}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Fifo;
