import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebContent from './App';


// ReactDOM.render(<WebContent/>, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <WebContent />
  </React.StrictMode>,
  document.getElementById("root")
);
