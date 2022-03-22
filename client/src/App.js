import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// components
import BookList from './components/BookList.js'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Neilson's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  )
}

export default App
