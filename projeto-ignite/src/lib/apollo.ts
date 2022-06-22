import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
 uri :'https://api-sa-east-1.graphcms.com/v2/cl4ou43gm1ay201w70vrdh49p/master',
 cache: new InMemoryCache()
})