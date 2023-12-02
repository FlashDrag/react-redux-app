# React Redux SPA

Simple E-commerce React web app with Redux toolkit for state management.

## Features
- Product list
- Cart list
- Cart item count
- Add to cart functionality
- Remove from cart functionality
- Clear cart with Checkout button

## Tools Used
- React - JavaScript library for building user interfaces
- Redux `react-redux` for state management
- Redux toolkit `@reduxjs/toolkit` - simpler Redux development experience
- Node Sass - CSS preprocessor
- Bootstrap for styling
- Json Server for mock API (simulates a REST API using a JSON file as a data source)
- Concurrently for running multiple commands concurrently

## Local Setup
1. Clone or fork the repo
2. Install NPM packages
```bash
$ npm install
```
3. Run the local json server and start the app
- Run separately in two terminals
```bash
$ npx json-server './src/data/productList.json' --port 3001
$ npm start
```

**OR**

- Run concurrently
    - Install `concurrently` package
    ```bash
    $ npm install concurrently
    ```
    - Add the following line to `package.json`
    ```json
    "scripts": {
        // ...
        "server": "json-server --watch ./src/data/productList.json --port 3001",
        "dev": "concurrently \"npm start\" \"npm run server\""
    }
    ```
    - Run the following command

    ```bash
    $ npm run dev
    ```

## Deployment
Deploy React app with JSON server on Heroku

https://react-redux-spa-87750a2967c2.herokuapp.com/

1. Create Procfile in the root directory and add the following line:
```bash
web: node server.js
```
2. Add the `json-server` to `package.json`:
```json
"dependencies": {
    // ...
    "@testing-library/user-event": "^13.5.0",
    "json-server": "^0.17.4"
}
```
    - Install the package
    ```bash
    $ npm install
    ```
2. Create `server.js` file in the root directory and add the following code:
```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/data/productList.json');
const middlewares = jsonServer.defaults({ static: './build' });

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
```
3. Push the changes to GitHub
4. Create a Heroku app
5. Connect the Heroku app to the GitHub repo
6. Deploy the app


## Credits
[Learning Redux Toolkit](https://www.linkedin.com/learning/learning-redux-toolkit)
