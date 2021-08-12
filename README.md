# Favorites API

This is a Single Page Application where you can see items from a api source and favorite them

## Technical decisions
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) in order to avoid extra configurations
- The api sources being used ([GitHub](https://docs.github.com/en/rest) and [FreeToGame](https://www.freetogame.com/api-doc)) do not need authentication and have reasonable rate limits
- The Firebase Function *freeToGame* was deployed in order to avoid CORS problem with [FreeToGame API](https://www.freetogame.com/api-doc)


## Architecture

This project is following a layed architecture with the following layers:

[Service] - [Domain] - [Application] - [UI]

in which Service layer is the most external layer and UI layer is the most internal. The main rule for this architecture to work is that any external layer cannot have knowledge about the internal layers. The responsibilities of each layer are:

* Services: handles API calls and implements service interfaces
* Domain: implements business logic and uses service interfaces. See how FavoriteService is used in [favoriting business logic](src/domain/favorited/usecases/favorite_item_usecase.ts)
* Application: handles component logic and application data. Usually implemented inside [React Hooks](https://reactjs.org/docs/hooks-intro.html). For handling app data, the implementatin can be inside a component that implements a [React Context Provider](https://reactjs.org/docs/context.html#contextprovider) (see [AuthenticationProvider](src/domain/authentication/AuthenticationProvider.tsx) that handles authentication data) 
* UI: implements React components

In this project, there is also the API sources layer. This layer has implementations that are used in UI and Application layers through the [ApiSourceType](src/api_sources/ApiSourceType.ts) interface. In this sense, the UI and Application do not need to know which api sources are being used, i.e., the api source is generic for them.


## Libraries
This project is using the following libraries:
* [React Router](https://reactrouter.com/web/guides/quick-start): handles client side routing 
* [React Ant Design](https://ant.design/docs/react/introduce): base UI components
* [Axios](https://github.com/axios/axios): handles HTTP requests
* [Jest](https://jestjs.io/): tests runner
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): makes React components testing easier

## Limitaions
* In local environment, you should only favorite one item per time. LocalStorage is being used for storing favorites and concurrency is not being handled. In a production environment, this would be the server resposibility
* In local environment, user data is cleared when you sign out

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


