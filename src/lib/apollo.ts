import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cliaknrpk09cj01t9hh2i4tmr/master",
  cache: new InMemoryCache()
})