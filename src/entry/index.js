import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router';
import App from '../component/App'
import todoApp from '../redux/Reducers'
import List from '../component/list.js';
import Name from '../component/name.js';
let store = createStore(todoApp);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
render(
  <Provider store={store}>
    <Router history={appHistory}>
        <Route path="/" component={App}/>
        <Route path="e3" component={Name} />
    </Router>
  </Provider>,
  document.querySelector("#wrapper")
);
