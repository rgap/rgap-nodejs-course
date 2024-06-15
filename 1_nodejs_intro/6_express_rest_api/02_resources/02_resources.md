# Resources in REST

## What is a Resource?

In REST, a resource is an object or representation of something that has some meaning. It is an abstraction of any piece of information that can be named. Examples include:

- A document or image
- A temporal service (e.g., today's weather in Los Angeles)
- A collection of other resources
- A non-virtual object (e.g., a person)

## Resource Representation

Resources are typically represented in JSON or XML format. A representation consists of data, metadata describing the data, and hypermedia links to related resources.

### Example Resource Representation (JSON)

```json
{
  "id": 1,
  "name": "Item 1",
  "description": "This is a description of item 1",
  "links": {
    "self": "/items/1",
    "collection": "/items"
  }
}
```

- Data: Contains the actual data of the resource.
- Metadata: Describes the data, providing additional context.
- Hypermedia Links: Links to related resources, enabling HATEOAS (Hypermedia As The Engine Of Application State).

## Resource URIs

Each resource is identified by a URI (Uniform Resource Identifier). The URI is used to access the resource using HTTP methods.

### Example URI Structure

https://api.example.com/items/1

- Scheme: https
- Host: api.example.com
- Path: /items/1

## Resource State

The state of the resource at any particular time is known as the resource representation. When a client accesses a resource, the server sends back the current state of that resource.
