## Survey app

Create an app that lets logged-in users create surveys.

A survey consists of one or more questions. 

Any site visitor can take a survey (that is, taking a survey does not require login).

Here is a description of the relationships:

- A User has many Surveys
- A Survey has many Questions
- A Question has many Responses

Here are some suggestions:

- A user can view a list of available surveys
- A user can click a survey title to respond to its questions
- A user sees one question at a time and can answer one question at a time
  - Alternatively, you can show all survey questions on one page.

Note: if you show one question at a time, store the current question id in the session. (You can create sessions for users even if they're not logged in.)

Logged in users should be able to see the answers for each of the questions for a survey.
