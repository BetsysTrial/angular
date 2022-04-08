# Betsys trial day

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Instalation

Run `npm install` for install all dependencies.

## App start

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## TO DO
- Show `name` and `city` of 10 users from endpoint `https://jsonplaceholder.typicode.com/users` inside table
- use `NgRx`
  - load users by dispatching action from component
  - store users into `UsersState` (app/store/users/users.state.ts)
  - use selector to get users from store
  - for users table crete component which receives users as `@Input` and shows them as a table with 2 columns like on design (design of table can be found in `/todo/visual.png`)
