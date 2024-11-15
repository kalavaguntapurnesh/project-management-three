// index.js (or App.jsx)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { AppProvider } from "./AppContext.jsx"; // Import AppProvider correctly

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AppProvider>
  </Provider>
);
