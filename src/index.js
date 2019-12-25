import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './component/Posts'
import Comments from './component/Comments'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/posts/:id" component={Posts} />
            <Route path="/comments/:id" component={Comments} />
            
        </Router>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();