# Backend-Framework: Express

## Status

Accepted

## Context

In order to keep the effort and the error-proneness of building the backend as low as possible, it might be a good idea to use a framework for this purpose.

## Decision

- Use Express.js

## Consequences

- Express only requires javascript, which does not further complicate the syntax of the backend
- By easily integrating middleware, the application remains flexible in order to be prepared for strong changes in requirements (server side)
- since Express is not very opinionated, one has to make an effort to keep the server-side code comprehensible and concise
