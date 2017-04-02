// import from node_modules
// if it's just a string, webpack will assume to look in node_modules
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'
// import from our custom components
// ** important ** needs to be a relative path
import App from './components/App';

import StorePicker from './components/StorePicker';
import NotFound from './components/notFound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById("main"));
