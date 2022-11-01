import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./fonts/Tw-Cen-MT.ttf";
import "./fonts/GoudyBookletter1911.ttf";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "https://mildew-magazine.myshopify.com/api/graphql",
});

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": "129221aad42cfe6398aba443afb14187",
  },
}));

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
