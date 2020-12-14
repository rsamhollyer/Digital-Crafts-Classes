
# Express kata: from hello-world to HTML forms

- setup express app

- add a home route that shows hello world

- install templating engine

- create a home template

- pass a local to the home template (just a message String)

- create an array of objects (global variable)

- add a `/items` route that sends the array using `res.json()`

- add a template for the list

- .map() the array in the template, showing 1 property in a <li>

- modify the .map(), showing a 2nd property

- add a route with a param for details (corresponding to one of the obj properties, like an id)

- res.send() back the route param (so that when you go to `/items/:id`, you see the id)

- use res.json() to send the obj from the array, specified by the param

- update the list (that appears on `/list`) so that each <li> has <a> that goes to details route

- add a template for the details page

- show the obj props in the template for the details page

- add app.use(express.urlencoded{extended: true}) so express can decode form submissions

- add a pair of routes (.get and .post) for the same path: `/create`

- create a template for the create form, with a form element that starts with `<form method="post">`

- `res.render()` the create form at the `app.get()` route

- in `app.post()` route, use values from `req.body` to `.push()` the new value to global array

- `res.send()` the text "thank you" from the `.post()` route

- add a `/thank-you` route

- add a `/thank-you` template

- `res.redirect()` to /thank-you from the .post route
