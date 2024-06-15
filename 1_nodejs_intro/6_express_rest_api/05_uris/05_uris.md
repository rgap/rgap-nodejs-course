# URIs in REST

## What is a URI?

A URI (Uniform Resource Identifier) is a string of characters used to identify a resource. In RESTful APIs, URIs are used to access resources.

## Structure of a URI

A URI has the following components:

- **Scheme**: Indicates the protocol (e.g., http, https).
- **Host**: Specifies the domain name or IP address of the server.
- **Port**: Indicates the port number on the server (optional).
- **Path**: Specifies the resource on the server.
- **Query**: Contains query parameters (optional).
- **Fragment**: Refers to a specific part of the resource (optional).

### Example URI

https://example.com:8080/items?id=123#section2

- **Scheme**: https
- **Host**: example.com
- **Port**: 8080
- **Path**: /items
- **Query**: ?id=123
- **Fragment**: #section2

## Best Practices for Designing URIs

- **Use Nouns, Not Verbs**: URIs should represent resources (nouns) rather than actions (verbs). For example, use `/users` instead of `/getUsers`.
- **Use Plural Nouns**: Use plural nouns for collections of resources. For example, use `/items` instead of `/item`.
- **Use Hierarchical Structure**: Organize URIs hierarchically to reflect relationships between resources. For example, use `/users/123/items` to represent items belonging to a user.
- **Use Lowercase Letters**: URIs should be case-insensitive, so use lowercase letters to avoid confusion.
- **Avoid Special Characters**: Avoid using special characters in URIs. Use hyphens instead of spaces or underscores.
