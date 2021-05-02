import { ApolloProvider, ApolloClient } from "@apollo/client";

import { InMemoryCache } from "@apollo/client/cache";

import AppRoutes from "./AppRoutes";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
};

export default App;
