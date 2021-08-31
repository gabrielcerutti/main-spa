# Getting Started with Main SPA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Container Application is deployed in [GitHub Pages](https://gabrielcerutti.github.io/main-spa), it includes two micro-frontends bootstrapped with [microfrontend-typescript](https://www.npmjs.com/package/cra-template-microfrontend-typescript) template.

The Container Application (aka Main SPA) has the capability to launch a React micro-frontend application.

![image.png](/diagram_1.png)

> **Note:** In the micro-frontend architecture, globals have to be carefully controlled. Globals doesn’t only refer to variables or state, but it can also include things such as window/document event handlers, persistent network connections, anything that can be actively running despite the app no longer being in the DOM. It can be incredibly easy to forget that these things can leak, and that they require proper tear downs.

## Mechanism 

In order to integrate a micro-frontend, some changes must be done in the react app, basically expose two functions that will be called from the container app:
- **render:** this function will call _ReactDOM.render_ to render the root app component.
- **unMount:** this function will call _ReactDOM.unmountComponentAtNode_ to unmount the root app component and perform any needed cleanup.

It is possible to subscribe/unsubscribe from the Container App to events dispatched from the micro-frontend with the functions:
- **subscribe**
- **unSubscribe**

You can bootstrap a micro-frontend quickly using the [microfrontend-typescript](https://www.npmjs.com/package/cra-template-microfrontend-typescript) template.

## How to setup a new micro-frontend

You just need to add a new MicroFrontend component in the Microfrontends.tsx file:

```javascript
const newMicroHost = process.env.REACT_APP_NEW_MICRO_HOST ?? '';

export const YourNewMicro = () => {
  return (
    <MicroFrontend
      id={1}
      name="Some Cool Name"
      microId="MustBeTheSameIdThanMicroFrontendApp"
      host={newMicroHost}
      basePath="newroute"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};
```

Then add a new Route:

```javascript
<Routes basename={basename}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/micro-x" element={<MicroX />} />
    <Route path="/micro-y" element={<MicroY />} />
    <Route path="/newroute" element={<YourNewMicro />} />
</Routes>
```
You can navigate directly to that route from the browser address bar or add a new link in the menu if you wish.

> **Note:** It's important to mention that you have to setup and use the routes properly in the micro-frontend app to be able to navigate thru the different pages.

> **Note:** GitHub Pages doesn’t support routers that use the HTML5 pushState history API under the hood (for example, React Router using browserHistory). This is because when there is a fresh page load for a url like http://user.github.io/todomvc/todos/42, where /todos/42 is a frontend route, the GitHub Pages server returns 404 because it knows nothing of /todos/42.

## MicroFrontend component properties

The setup in the _container app_ should be straightforward. There is a component to facilitate the integration with micro-frontends.
The **MicroFrontend** component has the following props:
- **id**: this is the unique identification of the micro-frontend.
- **name**: this is the name of the module used to show in the document title.
- **microId**: this is the identification you used in the micro-frontend app to define the library id or the function names depending on the approach you have chosen.
- **host**: this is the path to the host wherever the app is hosted (cluster or static storage).
- **basePath**: this is the base path to be used by the React router inside the micro-frontend.
- **loadType**: this is the way the micro-frontend is loaded, it can be:
  - _optimized_: regular react app using code splitting 
  - _not-optimized_: regular react app NOT using code splitting 
  - _bundle_: one big bundle.js file
- **buildMode** (optional): it depends on the approach you have chosen to build the micro-frontend.
  - _library_: build using react-app-rewired (default)
  - _standalone_: regular react app build
- **history**: react history component.

## Styling

This application is using [material-ui](https://material-ui.com/styles/basics/) for styles. To avoid collisions in case that more than one material-ui engine is loaded in the app (for example in the Container App and a Micro-Frontend), a prefix is setup in the class name generator:

```javascript
// CSS class name generation, we are using this in order to not collision names with the micro-frontends
const generateClassName = createGenerateClassName({
  disableGlobal: false,
  productionPrefix: 'mainspa',
  seed: 'mainspa',
});

<StylesProvider generateClassName={generateClassName}>
    <App />
</StylesProvider>
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Check out the [Micro-Frontend template](https://www.npmjs.com/package/cra-template-microfrontend-typescript).
