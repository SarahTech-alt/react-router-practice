# React Router Student List

Before you get started make sure to look through the code that has been provided. This is a working copy of the React Student List activity. 

### Setup

Start postgres if you haven't already - `brew services start postgres` or `postgres -D /usr/local/var/postgres` etc.

In Postico, create a new database called `react_student_list`. Copy the SQL code from [database.sql](./database.sql) into Postico and run it.


Then start up your server and client with npm:

```
npm install
npm run server
npm run client
```

## Base Mode

Add routing and navigation to this app!

- [x] Install `react-router-dom` and setup the `Router` in `App`.
- [ ] Add a `<nav>` element with links to /home, /about, or /allStudents
- [ ] Add a new About page that says a little about the app (don't overthink this, just display a sentence or two)
- [ ] Show the student list view from the /allStudents route.
- [ ] Keep the Form in the /home route
   - [ ] After successfully adding a new student, move us to `/allStudents`, but only on success
