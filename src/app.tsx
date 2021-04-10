import React from 'react';
import './app.css';
import { Router } from './router';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Header } from './components/page-header/header';
import { Wifi } from '@material-ui/icons';

const httpLink = createHttpLink({
  uri: 'https://u33rwodquja65b4wqaae2gmjpi.appsync-api.eu-west-2.amazonaws.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-api-key': 'da2-zsnhp4yvajh3pkafinbcsuhn34',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header Logo={Wifi} />
          <Router />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
