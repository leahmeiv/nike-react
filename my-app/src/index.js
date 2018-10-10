import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Nike extends React.Component {

  render() {
    return (
        <h1>Nike!</h1>
  );
  }
}

ReactDOM.render(<Nike />, document.getElementById('root'));
