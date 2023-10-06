import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import Cookies from "js-cookie";
import { TOKEN_NAME } from "../utils/constants";

// export const API_URL = import.meta.env.VITE_API_URL;
// console.log(API_URL);
// console.log("from index.ts");

export const apollo: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",

  headers: {
    Authorization: Cookies.get(TOKEN_NAME) || " ",
  },
});
