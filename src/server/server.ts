import { createServer, Model } from "miragejs"
import { searchResult_bolsonaro, searchResult_all, searchResult_lula } from "./data/searchResult";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    routes() {
        this.namespace = 'api';

        this.get('/search/:text', (squema, request) => {
          var text = request.params.text;
          if(text.toLocaleLowerCase() === 'bolsonaro')
             return searchResult_bolsonaro
          else if(text.toLocaleLowerCase() === 'lula')
            return searchResult_lula
          else
            return {}
        })
    }
  })

  return server
}