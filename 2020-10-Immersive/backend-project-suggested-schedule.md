
# Backend Project Schedule (suggested)

This is an overview of what your team should do each day of the project. This is just a suggestion, of course, but it will make sure you're not doing a lot of last-minute coding right before presenting to the class!

## Day 1 - Whiteboarding, user stories, and setup

On the first day, your team should decide on what you'll be building. This is when you'll do most of your planning and user story writing.

### GitHub repo

One team member will create the repo on GitHub and invite the others to be collaborators.

The other members should clone the project to their computer.

As a group, you might pair while one person does the initial setup (i.e., installing `express`, running `sequelize init`, creating the project directories, filling out the skeleton of the `index.js`, etc.)

This provides the starting point for everyone else's work.

#### Project board

Add a project board to the repo, and create columns to track the progress of user story cards. The following is an example:

- Icebox - cards that should not be worked on (i.e., depends on something not yet completed, too big to finish)
- To Do - stories that are ready for implementation
- In Progress - a team member is actively working on these stories
- Completed - the Pull Request has been accepted and merged into the `main` branch

### Whiteboarding

Using a drawing tool (like draw.io or Zoom's built-in whiteboard), make a rough drawing of each screen of your app. Ask yourself questions like:

- Does the information change if the user is logged in? (If so, you'll either need to create separate templates, or you may need to pass in additional information to the `res.render()` and use ternaries (`? :`) in the template.)
- Where does the information come from? (i.e., A nav bar is on every page, so it should be a partial. A list of products comes from the database.)
- From this page, what other pages can the user go to? Do the links need to be static (`/login`) or dynamic (`/product/12345`)? Will you need to accept route parameters on the target page?

### User Stories

As you discuss the app while whiteboarding, make notes about what your user's goals are for each screen/page. Write user stories in the format:

|As a user, I want to `___` so that I can `___`.

Create all new stories as cards in the Icebox column. You'll end up with a lot of cards, so you could give related cards the same "title" - that is, for all cards related to login, make the first line something like "Login Page".

### Research

Some of your features may need additional node modules, or you may need to search for example code (e.g., from class demos, documentation, or blogs).

Add links to these resources in the relevant card.

This is also a good time to try out some of the example code. Will you need code that picks a random row from one of the database tables? Or maybe you need to format dates in a more user-friendly format? Create temporary node projects (that is not part of your project and you will not put on GitHub) and experiment with the code. If any of the code was particularly tricky, add it to your project repo in an `experiments` directory.

### Database Models

As you sketch out the app and write user stories, pick out the *nouns*. For example, if you were building a fantasy football app, the nouns would be:

- Player
- Team
- Game

These will be your primary database Models. For each of these, what information do you need to show to the user? What information does the user not see, but is important for your app? This will tell you what attributes your Models need.

How are the Models related? Describe these using "database speak":

- belongs to
- has one
- has many
- has many and belongs to many

This determines when you need foreign keys and when you need junction Models.

### Seed data

One of the most useful features of the Sequelize CLI is that it can automatically populate your database with sample data. Use the `db:seed` feature to create "seed files". Fill these out with enough sample data so that you can focus on building features instead of filling out forms.

## Day 2-3 (and weekend) - Feature implementation

You're now ready to work on your app! At the beginning of class, all team members should go to a breakout room to do a "stand up" - this is a very short meeting (10 minutes or less), where each member states:

- what features they've finished since the last stand up (if there was one)
- what features they're blocked on (so that others can help)
- what feature they're working on next

At this point, team members can pair to help with any blocked stories. Otherwise:

- Choose one of the user story cards from the project board
  - (i.e., Move it from the "to do" column to the "in progress" column)
- Create a feature branch on your local repo
- Build and debug, committing as you make progress
- Push your commits to GitHub
- Create a Pull Request and request a review.

As a reviewer, you can either:

- look through the code in the PR on github.com, ask questions, and make comments
- `git fetch` and `git checkout` the feature branch and test it manually

**Do not merge your own feature branches!!** However, it's OK to merge small bug fixes. 

If possible, do a second stand up after lunch. 



It's a good idea for everyone to `git pull` the `main` branch a few times a day (e.g., after each stand up, at the beginning/end of each day). If your feature branch isn't too far behind `main`, you can `git merge main` from your feature branch to bring in the latest changes. 

## Day 4 - Last features, bug fixes, and deployment

You'll probably have some user stories left to do. Decide which ones are necessary to your MVP (Minimum Viable Product), and move the rest to the Icebox. If there are any bugs, those should be resolved before adding any features.

You want to get the code into a demo-ready form. If that means leaving out features, that's OK!

If you haven't deployed yet, ping your instructor for a walk-through.

## Day 5 - No new code!

This is the day you'll be presenting. Make sure you've deployed the latest version of your app.

You should not be writing any new code. Instead, focus on writing your README. Make sure to include:

- the name and purpose of your app
- the overall architecture (as a diagram)
- technologies (libraries, frameworks, and additional node modules) used
- technical challenges
- the next features you would include in a future version of the app
- links to each team members' GitHub profile

Decide what each person will speak about during the presentation. Slides aren't required, but can be helpful.



