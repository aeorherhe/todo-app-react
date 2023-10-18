import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./services/store.js";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { MyProfile } from "./components/others/MyProfile.jsx";
import { createPortal } from "react-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
      {createPortal(<MyProfile />, document.body)}
    </Provider>
  </React.StrictMode>
);
