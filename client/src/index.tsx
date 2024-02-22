import ReactDom from "react-dom/client";
import { AppRouter } from "./AppRouter";
import React from "react";
import "./style.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <AppRouter />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
