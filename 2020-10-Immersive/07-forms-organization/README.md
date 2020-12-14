# Agenda

- [X] Josh's discord server
- [X] warmup!
- [X] review exercises
- review classroom board
- review of HTML forms
- parsing POST bodies
- Pattern: Create-Retrieve-Update-Delete (CRUD)
- Organizing into Routers and Controllers
- *Creating and merging feature branches

## How do forms work?

Forms let users send data to the server.

Browsers encode the data and put in the body of a POST request.

The server must decode the POST body to use the data.

## How do I do that with express?

- `app.use()` the `express.urlencoded()` middleware
- Create a template with the HTML for a form.
    - label each field with a `name` attribute
- `res.render()` the template in an `app.get()`
- Use an `app.post()` to receive the form submission
    - Get the values from `req.body`
- `res.redirect()` to another route when finished

## What is CRUD?

- Create
- Retrieve
- Update
- Delete