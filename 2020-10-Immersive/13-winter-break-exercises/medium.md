
## Login (express app setup)

From memory, write down as many of the steps needed for an app with:

- a PostgreSQL database
- A User model
- express
- ES6 templates
- A route that can show a signup form
- A route that can process the signup form
- A route that can show a login form
- A route that can process the login form

Run through the steps your wrote down. As needed, refer to notes, example code, and class videos. Update your written list of steps with any corrections.


### Login + sessions

- Add a route at the path `/restricted`.
- Add sessions to your app.

When the user logs in, add the user's id to the session.

Only allow logged in users to  access to the `restricted` route. If someone tries to visit `/restricted` without logging in, redirect them to the login page.


