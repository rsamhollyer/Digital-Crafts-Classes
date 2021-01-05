# Agenda

- kanban board
- 3 questions (from backend review session)
- backend project overview
- Review: Update and Delete
- Linking Tables (aka "Junction Tables")
  - for many-to-many relationships


---

# crUD!

- Create
    - Sign up 
    - `User.create()`
- Retrieve
    - Log in
    - `User.findAll()`
        - returns an Array
    - `User.findOne({ where: id })`
        - returns an Object (or null)
    - `User.findByPk(1)`
- Update
    - Edit your profile picture
    - `User.update({ where: id })`
- Delete
    - Delete account
    - `User.destroy({ where: id })`