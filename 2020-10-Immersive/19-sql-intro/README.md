# SQL intro

## What is SQL?

- Structured Query Language
- Programming language for talking to and working with a relational database

## What is a relational database?

- PostgreSQL, MySQL, MS MSQL, etc.
- it's based on relational algebra
- it guarantee data integrity
    - using FK, you avoid duplicating data

### What are alternatives to relational databases

Google: "NoSQL'

- MongoDB - document store
- Redis - key/value store - popular for storing session info

## What's CRUD again?

- Create
- Read/retrieve
- Update
- Delete

## How does that relate to REST?

A RESTful API is what you were building with express.

REpresentational State Transfer: associating HTTP methods or verbs with CRUD

- Create - POST
- Read - GET
- Update - PUT (or PATCH)
- Delete - DELETE

## How do I use SQL in a node.js app?

- `sequelize.query()`
    - this is available in your model.js file
- `pg-promise`
    - you pass it SQL strings, it talks to the database for you
    - it returns arrays of objects

---


## How do I...?

### Get all the rows from a table?

```sql
select * from "Games";
```

### Count all the rows in a table?

```sql
select count(*) from "Games":
```

### Limit the number of results

```sql
select * from "Games" limit 10;
```


### Sort the results?

```sql
select * from "Games" order by title;
```


### Can I combine? YES YOU CAN!

```sql
select * from "Games" order by title limit 10;

```

### Searching, case insensitive

```sql
select * from "Games" where genre ilike '%action%' or genre ilike '%rpg%'

```
