import { setupServer } from "msw/node";

const server = setupServer();
server.listen();

const url = "https://www.google.com/";

const response = await fetch(new URL(url));
console.log(response.status);

server.close();
