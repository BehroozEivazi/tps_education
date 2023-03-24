import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store, createStore } from "redux";
import reducer from "./store/index";
// import { DispatchType, IArticleAction, IArticleState } from "./store/types";
// import { ArticleReducer } from "./store/ArticleReducer";

// const store: Store<IArticleState, IArticleAction> & {
//     dispatch: DispatchType;
// } = createStore(ArticleReducer);

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
