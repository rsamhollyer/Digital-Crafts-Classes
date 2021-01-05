#  Backend Project Requirements

## Description

- Your task is to form into teams and build something awesome!
- You'll be using the backend (and front-end) skills you've developed over the last couple of months.

## Deliverables

- Project must be deployed to AWS
  - The site should be protected with an SSL certificate
- GitHub repo must have a README.md
  - Add diagrams and screenshots
- Each team must present their project on the afternoon of the 5th class day.
  - Each team member must speak about a technical aspect of the project (code, architecture, deployment, etc.).

### Examples from recent cohorts

Note, some these projects may use a different database, templating library, or ORM than the ones you have used.

- https://github.com/jevinkeffers/Taskwork ([live version](https://taskwork.io/))
- https://github.com/TheBrotherFromASouthernMother/Bidder-HTX
- https://github.com/etridenour/Digital-Director
- https://github.com/hirosoft40/FullStackProject


## Technical Requirements: front-end

It is recommended that you do not focus on CSS. Please (gently) use a library (ie. Bootstrap, Bulma, Foundation, Materialize) for your styling. Do any additional styling via custom CSS (i.e., a `.css` file that is in your `public` folder).

- https://getbootstrap.com/
- https://bulma.io/
- https://get.foundation/
- https://materializecss.com/

Implement a simple Responsive Web Design that works on Safari on iOS devices and Chrome for Android devices at 360px, 768px, and 1200+ px wide. For desktop, use Chrome to check your responsive layout.

## Technical Requirements: backend

- Use Express for your HTTP framework.
- Use express-es6-template-engine for your templating.
  - You are welcome to use another templating library, such as Handlebars
- Use Sequelize to create Models and Migrations
- Use PostgreSQL for your database
  - Use ElephantSQL while developing your app
  - On AWS, install PostgreSQL on the server
- Create at least 3 tables (Models)
  - Make sure that at least 2 of the tables are related (via foreign keys)
- Store your static files in the 'public' folder

### Recommended

- Allow user login, with passwords encrypted with `bcryptjs`.

## Workflow Requirements

- Group size should be 2 or 3
  - Otherwise, talk to your instructor about other group sizes
- Create GitHub repo (add all group members as collaborators)
- Collaborate using PRs (Pull Requests), making sure to tag a reviewer for approval
- Use a feature tracking system, such as Github's Project board.
