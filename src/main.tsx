import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { apollo } from "./apollo/index.ts";
import { StateProvider } from "./state management/StateContext.tsx";
// import { AuthContextProvider } from "./authStore/authInterface/Auth.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <StateProvider>
        <App />
      </StateProvider>
    </ApolloProvider>
  </React.StrictMode>
);
