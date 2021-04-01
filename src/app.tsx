import React from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Header } from './components/page-header/header';
import { Album } from '@material-ui/icons';

const httpLink = createHttpLink({
  uri: 'https://z5vddreq5jbitmzm67quoovz2u.appsync-api.eu-west-2.amazonaws.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-api-key': 'da2-oau2ws32rjfz3ojbdgy5pllvbm',
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
          <Header Logo={Album} />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
