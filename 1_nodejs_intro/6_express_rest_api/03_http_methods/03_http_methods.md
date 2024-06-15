# HTTP Methods in REST

## Standard HTTP Methods

1. **GET**: Retrieve data from the server.

   - **Safe**: Does not alter the state of the server.
   - **Idempotent**: Multiple identical requests have the same effect as a single request.
   - **Cacheable**: Responses can be cached.

2. **POST**: Send data to the server to create a new resource.

   - **Not Safe**: Alters the state of the server.
   - **Not Idempotent**: Multiple identical requests may result in multiple resources being created.
   - **Not Cacheable**: Responses are generally not cached.

3. **PUT**: Update an existing resource on the server.

   - **Not Safe**: Alters the state of the server.
   - **Idempotent**: Multiple identical requests have the same effect as a single request.
   - **Not Cacheable**: Responses are generally not cached.

4. **DELETE**: Remove a resource from the server.

   - **Not Safe**: Alters the state of the server.
   - **Idempotent**: Multiple identical requests have the same effect as a single request.
   - **Not Cacheable**: Responses are generally not cached.

5. **PATCH**: Partially update an existing resource on the server.

   - **Not Safe**: Alters the state of the server.
   - **Idempotent**: Multiple identical requests have the same effect as a single request.
   - **Not Cacheable**: Responses are generally not cached.

6. **OPTIONS**: Describe the communication options for the target resource.

   - **Safe**: Does not alter the state of the server.
   - **Idempotent**: Multiple identical requests have the same effect as a single request.
   - **Cacheable**: Responses can be cached.

7. **HEAD**: Same as GET but only retrieves the headers.
   - **Safe**: Does not alter the state of the server.
   - **Idempotent**: Multiple identical requests have the same effect as a single request.
   - **Cacheable**: Responses can be cached.
