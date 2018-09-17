# Angular Redux Proof-of-Concept

This is a little proof-of-concept/toy to better understand how to integrate [redux](https://redux.js.org/) into an Angular 6 application.

## Fetch and Run

Clone the repo, then install the dependencies

```sh
$ git clone git@github.com:whazzmaster/angular-redux-poc.git
$ cd angular-redux-poc
$ npm install
```

Now you may serve the application

```sh
$ ng serve
```

Then open the application at [http://localhost:4200](http://localhost:4200)

## Areas to Note

Much of the redux architecture is located under [src/app/state](src/app/state); there you'll find the `reducers` and `actions` directories where we define the application state and the business logic that mutates it.

Check out [`src/app/app.module.ts`](src/app/app.module.ts) to see how we configure the store and how we hook the router into the store.

Look at [`src/app/analysis-details`](src/app/analysis-details) and [`src/app/analysis-list`](src/app/analysis-list) to see how components are connected to the store, and how we use the `Observable` properties in templates.

## Resources

- [redux](https://redux.js.org/): a predictable state container for javascript applications
- [angular-redux](https://github.com/angular-redux/platform): redux bindings for Angular applications