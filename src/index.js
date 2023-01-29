import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faLocationDot, faTag, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faImage, faNewspaper } from '@fortawesome/free-regular-svg-icons'

library.add(faMagnifyingGlass, faImage, faLocationDot, faNewspaper, faTag, faEllipsisVertical)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
