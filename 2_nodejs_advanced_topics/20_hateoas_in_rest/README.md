# HATEOAS in REST

## What is HATEOAS?

HATEOAS (Hypermedia As The Engine Of Application State) is a constraint of the REST application architecture. It means that a client interacts with the application entirely through hypermedia provided dynamically by application servers.

## Hypermedia

Hypermedia is any content that contains links to other forms of media. In the context of REST, hypermedia refers to the inclusion of links in the responses that guide clients on how to interact with the API.

### Example Hypermedia Representation (JSON)

```json
{
  "id": 1,
  "name": "Item 1",
  "links": {
    "self": "/items/1",
    "collection": "/items",
    "next": "/items/2"
  }
}
```

- self: A link to the current resource.
- collection: A link to the collection of resources.
- next: A link to the next resource.

## Benefits of HATEOAS

- Discoverability: Clients can discover available actions dynamically by following links in responses.
- Decoupling: Clients do not need to hard-code URI structures. They can follow links provided by the server.
- Scalability: The server can evolve independently of clients by adding new links and actions.
