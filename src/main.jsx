import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Toaster } from "react-hot-toast";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

import "modern-normalize";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <Toaster position="top-right" />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
