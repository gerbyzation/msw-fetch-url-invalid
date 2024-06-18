const url = "https://www.google.com/";

const response = await fetch(new URL(url));
console.log(response.status);
