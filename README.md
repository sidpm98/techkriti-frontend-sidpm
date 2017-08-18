# Techkriti-Frontend

# [![Built with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://spacemacs.org)

The frontend to Techkriti'18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

### TOSC 

Run `yarn start-tosc` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Admin-Portal

Run `yarn start-admin` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Techkriti-Main

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Github notifications also sent to slack via `rusty`.

Git pre-commit hook to run `lint` before commiting

## Client Side

Uses `angular-material` [here](https://material.angular.io/)

Webpack bundles all angular files into 1.

Angular2 code written in TypeScript. All html and css written in separate files but
inlined during compilation. So the `main.bundle.js` file contains everything.

### TODO:
If templates start becoming bigger and bigger, remove inlining of template html and css
and use absolute urls instead.


