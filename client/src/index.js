import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import CloseNavBarFix from "./CloseNavBarFix";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); // these guys are no fun, stealing my server calls
