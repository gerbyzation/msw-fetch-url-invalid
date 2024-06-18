import { setupServer } from "msw/node";

const server = setupServer();
server.listen();

const url = "https://www.google.com/";

await fetch(new URL(url));

server.close();
