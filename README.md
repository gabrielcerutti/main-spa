# Getting Started with Main SPA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Main SPA is deployed [here](https://gabrielcerutti.github.io/main-spa) including two demo micro-frontends bootstrapped with [microfrontend-typescript](https://www.npmjs.com/package/cra-template-microfrontend-typescript) template.

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
