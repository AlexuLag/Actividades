import ReactDOM from 'react-dom';
import {  Router } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App';
import './app/layout/styles.css';
import { store, storeContext } from './app/stores/store';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory} from 'history'

export const history= createBrowserHistory();

ReactDOM.render(  
  <storeContext.Provider value={store}>
    <Router history ={history}>
      <App />
    </Router>
   
  </storeContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
