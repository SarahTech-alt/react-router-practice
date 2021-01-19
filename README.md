# React Router Student List

Before you get started make sure to look through the code that has been provided. This is a working copy of the React Student List activity. 

### Setup

Start postgres if you haven't already - `brew services start postgres` or `postgres -D /usr/local/var/postgres` etc.

```
npm install
npm run server
npm run client
```

## Base Mode

- Install `react-router-dom` and setup the `Router` in `App`.
- Add a `nav` that allows users to visit /home, /about, or /allStudents
- Add a new About page that says a little about the app (don't overthink this, just display a sentence or two)
- Put the list into  /allStudents route.
   - You should move the HTTP Get into the list, and have an effect there.
- Keep the Form in the /home route
   - After successfully adding a new student, move us to `/allStudents`, but only on success
