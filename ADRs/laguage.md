# Language: Javascript

## Status

Accepted

## Context

As the project is a non-static web application, the use of a programming language is required.

## Decision

- Use Javascript

## Consequences

- Javascript is the most widely used programming language for web applications, so the choice of packages that extend it is very large
- Both front- and backend are written in Javascript, so it is convenient to switch between the two parts of the application
- Without further typing, e.g. by using Typescript, the application could become more error-prone with increasing size. One must therefore consider if and when it is worthwhile to switch to Typescript.
