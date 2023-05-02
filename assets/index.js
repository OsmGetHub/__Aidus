import React, {rea} from 'react';
import Login from "./login";
import {store} from "./ReduxToolkit/store";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";

function Index() {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    );
}

ReactDOM.render(<Index />,document.getElementById('root'))