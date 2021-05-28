import { createServer, Model } from "miragejs"
import { searchResult} from "./data/searchResult";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    routes() {
        this.namespace = 'api';

        this.get('/search/:searchItem', (squema, request) => {
          return searchResult
        })
    }
  })

  return server
}