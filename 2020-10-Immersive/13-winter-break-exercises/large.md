
## Notes-taking application

Create an express app with two Sequelize models:

- User
- Note, with:
  - title
  - content

Create forms for:

- User signup
- User login
- Note creation

When creating a form, it should "belong to" the logged in user.

Create routes for:

- listing all notes (showing only the title)
- viewing the title and content for a single note

### Note search

Add a `/search` route that shows form that contains a text input.

When the user submits the form, find notes that contain that search term, and display the results in a list. Allow the user to click a note to view the full note.

Hint: refer to [this Stack Overflow discussion](https://stackoverflow.com/questions/42352090/sequelize-find-all-that-match-contains-case-insensitive) to learn how to do a case-insensitive text search.


