
# Agenda

- warmup
- survey
- exercise (creating and using a foreign key)
- Finishing CRUD:
	- Model.update()
	- Model.delete()
- describing relationships
	- has many
	- belongs to
	- many to many
- examples:
	- tags
	- comments

# Sequelize takeaways:

## If we have models, why do we need migrations?

- migrations set up your tables in the PostgreSQL database
- models determine what properties your JavaScript objects have

## In my migration, do I really need to tell it that something is a foreign key?

No, but if you do, Postgres can do things like:

- Delete all a User's DinnerIdeas if you delete the User.

## In my model, do I really need to define an INTEGER field as a foreign key?

No, but if you do, Sequelize can do things like:

- Retrieve a User *along with* all their DinnerIdeas

## What happens if I made a typo when generating my Model?

If you've alredy run the migration, undo it:

```sh
npx sequelize-cli db:migrate:undo
```

Then, fix the typo in the model file and the migration file.

Now, run the migration and you're all set. :thumbsup:

