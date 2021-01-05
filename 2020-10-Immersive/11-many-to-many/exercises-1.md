
# Dinner idea app

Imagine that you arrive at work and you're assigned the following project card:

```
As a user, I want to add dinner ideas which are only visible to me when I'm logged in, so that I can privately 
```

## 1. Start from the class example code

https://github.com/DigitalCraftsStudents/multiple-login-examples/tree/main/login-sessions

Feel free to modify your cloned version, or make a copy of the directory.

### Note: you'll need to put in your own credentials from ElephantSQL!

Otherwise, you and another student might overwrite each other's data.

## 2. Generate the `DinnerIdea` model

Use `npx sequelize-cli` to create the model, and make sure to add an integer attribute (to serve as a foreign key).

## 3. Modify the models

Refer to [this repo](https://github.com/DigitalCraftsStudents/sessions-relationships-demo) and fill out the `associate()` function for the `DinnerIdea` and `User` models.

## 4. Modify the migrations

Make sure that the `DinnerIdea` migration sets up the foreign key correctly. (Again, refer to https://github.com/DigitalCraftsStudents/sessions-relationships-demo as needed)

## 5. Run the migration

Use `npx sequelize-cli` to create the database tables.

## 6. Add  routing, controller, and template code to express

Feel free to start by putting the new code in the `index.js`.

Once you have it working, try to refactor your code into routers and controllers.

You'll need to handle three different cases:

- listing dinner ideas for the logged in user
- showing a form for a new dinner idea
- processing the form for a new dinner idea

### Notes:

- You'll need to put the user's id in the session when they log in.
- Get the user's id from the session when you process the form submission for a new dinner idea.
