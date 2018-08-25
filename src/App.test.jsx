import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './mockData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App data={data} />, div);
});
