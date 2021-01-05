# Database Modeling

Feel free to refer to your notes and any demo code!

## Find the nouns

Consider these apps:

- Venmo (or Square cash)
- Instagram
- Reddit
- Linked In


For each app, describe the main features and:

- pick out the main nouns (Users, Posts, Comments, etc.)
- describe the relationship between each one using these terms:
  - has many
  - has one
  - belongs to
  - has many and belongs to many

## Create Sequelize models

For one of the apps, create a node project (`mkdir`, `cd`, and `npm init`) and `npm install`:

- `sequelize`
- `pg`
- `pg-hstore`
- `sequelize-cli` (as a dev dependency)

(You do not need to install express for this activity.)

Run `npx sequelize init` to create the Sequelize directories and create models for each of the nouns you uncovered in the previous step.

For simple relationships (has one, has many, belongs to), make sure to specify a foreign key attribute. 

Modify the model file and migration and set up the relationship. 
