import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import 'typeface-roboto'

import {faPlus, faChevronLeft, faTrashAlt, faCheckDouble} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));
