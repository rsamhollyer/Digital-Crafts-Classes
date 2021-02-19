# SQL continued

https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/

## useful psql commands

- what is i dont know the name of any dbs?
  - `psql template1`
- list all dbs
  - `\l`
- connect to specific db
  - `\c name-of-db`
- list all tables in a db
  - `\dt`
- how do i quit?
  - `\q`

## sql select syntax

- select \*
  - get everything
- select col1, col2

  - specifying which columns to include in the results

- where
  - > , <, =
  - and/or
    - for doing more complex where clauses
  - like, ilike with %
    - text matching, case sensitive and insensitive
  - in
    - shorthand for (or =) and (or =) and (or =) and ...
- subquery (using in)
  - most useful for "where in"
- timestamps (YYYY-MM-DD HH:MM:ss)
- order by
  - sorts by column
- distinct
  - removes duplicates for a column
- limit
  - reduces the number of results
- concatenation of column names (and single-quoted strings) using ~||~
  - with an "as" to label the resulting value
