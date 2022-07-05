import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <BrowserRouter>
//     <StateProvider
//       initialState={initialState}
//       reducer={reducer}
//     ></StateProvider>
//     <App />
//     <StateProvider />
//   </BrowserRouter>
// );

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
