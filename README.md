A repro demonstrating that msw@1.3.3 doesn't accept a URL instance
as it's first argument.

```
❯ node main.mjs
node:internal/errors:496
    ErrorCaptureStackTrace(err);
    ^

TypeError [ERR_INVALID_URL]: Invalid URL
    at new NodeError (node:internal/errors:405:5)
    at new URL (node:internal/url:778:13)
    at FetchInterceptor.<anonymous> (/Users/gerbenneven/projects/msw-fetch-URL-invalid/node_modules/.pnpm/@mswjs+interceptors@0.17.10/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:116:38)
    at step (/Users/gerbenneven/projects/msw-fetch-URL-invalid/node_modules/.pnpm/@mswjs+interceptors@0.17.10/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:59:23)
    at Object.next (/Users/gerbenneven/projects/msw-fetch-URL-invalid/node_modules/.pnpm/@mswjs+interceptors@0.17.10/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:40:53)
    at fulfilled (/Users/gerbenneven/projects/msw-fetch-URL-invalid/node_modules/.pnpm/@mswjs+interceptors@0.17.10/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js:31:58) {
  input: 'undefined',
  code: 'ERR_INVALID_URL'
}

Node.js v20.6.1
```
