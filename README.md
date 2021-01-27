# Symbol graphql server

Symbol graphql server provided a single endpoint responsible for accepting queries, rather than relying on the REST API approach of having separate endpoints for each service. On the other hand, users can access custom schema functions and access all the Symbol REST API services in the graphql server gateway.

This project is build on [graphql-mesh][github-graphql-mesh] with [symbol-openapi][github-symbol-openapi].

:warning:  **Note**: This project still work in progress.

### :zap: Playground (Demo)

Playground is UI tools for user write query to interact with the graphql server. It build with the docs show all the related query and schemas.

:star2:	We can write one query and retrieve all the data we needed in a single request from client (web/mobile) to graphql server.

In this demo: we request block Info by height and nested request the signer account info, and receipts happen in that block, just in a single query.

Demo : http://139.162.19.139:4000/

```
# Write your query or mutation here
query blockInfo {
  block(height:"2"){
    block{
      signerPublicKey
    }
    signerAccount{
      account{
        mosaics{
          amount
          id
        }
      }
    }
    receipts(pageInfo:{
      pageSize: 25
      pageNumber: 1
    }){
      data{
        statement{
          receipts
        }
      }
      pagination{
        pageNumber
        pageSize
      }
    }
  }
}
```

### Directory Structure

```
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── README.md
├── generated
│   └── mesh.ts # ts type generated from open API schema.
├── nodemon.json
├── package.json
├── src
│   ├── additional-resolvers.ts # resolver for query.
│   └── typeDefs.graphql # graphql schema.
├── .meshrc.yaml  # graphql-mesh config.
├── symbol-openapi3.yml  # generated open API schema.
├── tsconfig.json
└── yarn.lock
```

### :warning: Requirement

- The make sure Symbol API node is running with `http://localhost:3000`, if you not running any Symbol API node you can change the url to any public API node.

`symbol-openapi3.yml`

```
servers:
  - url: 'http://localhost:3000'
```


### Setup

1. Install the required dependencies.

```
cd yarn symbol-graphql
yarn
```

2. Run symbol-graphql server.

```
yarn dev
```

3. Visit Graphql playgound at http://localhost:4000 in your browser.


[github-symbol-openapi]: https://github.com/nemtech/symbol-openapi
[github-graphql-mesh]: https://github.com/urigo/graphql-mesh


### Usage on client

This is an example of using [xembook/nem2-browserify](https://github.com/xembook/nem2-browserify) converted from symbol-sdk with browserify.

```html
<script src="https://xembook.github.io/nem2-browserify/apollo-client-2.6.10.js"></script>
<script src="https://xembook.github.io/nem2-browserify/apollo-link-http-1.5.17.js"></script>
<script src="https://xembook.github.io/nem2-browserify/apollo-cache-inmemory-1.6.6.js"></script>
<script src="https://xembook.github.io/nem2-browserify/graphql-tag-2.11.0.js"></script>
<script>

apollo = require("/node_modules/apollo-client");
cache = require("/node_modules/apollo-cache-inmemory");
link = require("/node_modules/apollo-link-http");
gql = require("/node_modules/graphql-tag");

client = new apollo.ApolloClient({
  cache: new cache.InMemoryCache(),
  link: new link.HttpLink({
    uri: 'http://139.162.19.139:4000/graphql',
  }),
});

client.query({query: gql`
  query BlockInfo{
    block(height:"1000"){
      block{timestamp}
    }
  }
`})
.then(info=>console.log(info));
</script>
```

