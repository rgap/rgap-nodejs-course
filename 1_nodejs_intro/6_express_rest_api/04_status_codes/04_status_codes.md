# HTTP Status Codes in REST

## Informational (1xx)

- **100 Continue**: The initial part of a request has been received and the client should continue.
- **101 Switching Protocols**: The server is switching protocols as requested by the client.

## Success (2xx)

- **200 OK**: The request has succeeded.
- **201 Created**: The request has succeeded and a new resource has been created.
- **202 Accepted**: The request has been accepted for processing, but the processing has not been completed.
- **204 No Content**: The server successfully processed the request, but is not returning any content.

## Redirection (3xx)

- **301 Moved Permanently**: The resource has been moved to a new URI.
- **302 Found**: The resource is temporarily available at a different URI.
- **304 Not Modified**: The resource has not been modified since the last request.

## Client Error (4xx)

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server cannot find the requested resource.
- **409 Conflict**: The request conflicts with the current state of the server.

## Server Error (5xx)

- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
- **501 Not Implemented**: The request method is not supported by the server.
- **502 Bad Gateway**: The server, while acting as a gateway, got an invalid response.
- **503 Service Unavailable**: The server is not ready to handle the request.
