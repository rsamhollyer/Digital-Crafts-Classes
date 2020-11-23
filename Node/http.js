const http = require("http");
const port = 5100;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Server</title>
</head>
<body>
<header> <h1> This is a Title </h1> </header>


    <script>
    console.log("Hi There")
    


    fetch("http://localhost:5000")
    .then(res => res.json())
    .then(res => {
        res.forEach(person =>{
            let {firstName, lastName, email} =person
            appenToDom([firstName, lastName, email]) 
        })
    })

    const appenToDom = (contentArray) =>{
        const body = document.querySelector("body")
        let divEl = document.createElement("div")
        let ulEl = document.createElement("ul")
        
        contentArray.forEach(item => {
            let liEl  = document.createElement("li")
            liEl.innerText = item
            ulEl.append(liEl)
        })
        
        divEl.append(ulEl)
        body.append(divEl)
    }

    </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.end(htmlContent);
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

// This is only serving what we wend it and does not respond to any other request. We should be dealing with requests in the future.
//
