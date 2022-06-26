import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new  ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4udgptd0tc401ui0glc8uht/master',
  cache: new InMemoryCache()
})
