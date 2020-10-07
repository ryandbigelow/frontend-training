This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

From the root directory run `yarn lint`. This validates every `.ts` and `.tsx` file in the repository, excluding `node_modules`. All configuration can be found in [.eslintrc.json](./.eslintrc.json)

### `yarn typecheck`

From the root directory run `yarn typecheck`. This validates every `.ts` and `.tsx` file in the repository, excluding `node_modules`.

### `yarn format`

From the root directory run `yarn format`. This formats every `.ts` and `.tsx` file in the repository, excluding `node_modules`.

### `yarn storybook`

---

Because we are using Redux to manage application state independently of any UI, we can develop React components in isolation from the main application using an approach recommended by the create-react-app team: https://facebook.github.io/create-react-app/docs/developing-components-in-isolation. We have several storybooks depending on what kind of UI you are [creating](#Organization).

To start developing a new component with the storybook follow these steps:

1. Add a new [component].examples.tsx file to the `examples` folder
1. Use `storiesOf` to define the component you want to work on
1. Use `add` to add a specific state you want to show in the story
1. Run `yarn storybook` to build and run the storybook in your browser
1. Develop the component and save to see the changes in the storybook page

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
