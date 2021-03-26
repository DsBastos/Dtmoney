import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'food',
        createAt: new Date()
      }
    })
  }
})

=======
import { App } from './App';

>>>>>>> 7e74b6b5ac63eaa83313ae412decc6f5fc68f177
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

