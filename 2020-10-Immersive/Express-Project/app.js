const http = require("http");
const hostname = "0.0.0.0";
const port = 3000;
const express = require("express");
const app = express();
const server = http.createServer(app);
const db = require("./db");

server.listen(port, hostname, () => {});
