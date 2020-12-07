const http = require("http");

const hostname = "127.0.0.1"; // IP address for "localhost"
const port = 5000;

/*
Goal: a website with three ugly pages
1. home page
2. list of cats
3. individual cats
    /cats/oakley
    /cats/milla
*/

const server = http.createServer((req, res) => {

    console.log(`They are asking for ${req.url}`);
    // The '/' means "home page"
    if (req.url == '/') {
        console.log('They want the home page');
        // 200 means Request OK and Response OK
        res.statusCode = 200;
        // Headers do not appear in the browser.
        // You set headers to tell the browser
        // what's in the "package" (the Response).
        res.setHeader("Content-Type", "text/plain");
        res.write('does chris know vanilla node?');
        res.write('probably not....:P ');
        // .end() tells Node to send the
        // Response. #shipit
        res.end("Hey this is the HOME PAGE");
        // res.write('this will cause an error?');
    } else if (req.url === '/cats/') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end('meow');
    } else if (req.url.startsWith('/cats/')) {
        // I need to take everything after '/cats/'
        // and store it in a variable.
        const catName = req.url.split('/')[2];        
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        
        res.end(`Welcome to the palace of ${catName}`);
    } else if (req.url.startsWith('/cats/milla/photos')) {
    } else if (req.url.startsWith('/cats/oakley/photos')) {
    } else {
        // 404 means we do not have that page
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page not Found");        
    }



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});