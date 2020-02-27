![[](https://travis-ci.com/EstebanMarin/code-challenge)](https://travis-ci.org/EstebanMarin/code-challenge.svg?branch=master)
# Coding Challenge for Adidas

This is a project created as a reply to the coding challenge for Adidas. Its build with one topic in mind, `Composition`, over a cloud infrastructure in `AWS`, with `CI/CD` that deploys to [http://emcodingchallenge.net/](http://emcodingchallenge.net/)


## How to start working with this repo

1. Fork this repo in your own user
2. Make a new branch `git checkout -b pr/branch-name`

> Tip: Make your local `master` point to this repo, it applies also to all open source projects
> That way you can PR from your local environment
>
> ```
> git remote add upstream https://github.com/EstebanMarin/code-challenge.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```

3. Currently we are using `.nvm` to ensure `node` version, however, we are aiming to have local `dev` in a container so devs work with Docker Images.

## Architecture

With composition and [Components && Containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), the focus is that Developers build their UI using Atoms or single components that composed created either `Templates` or `Containers`. `Composition` is also in the logic, with custom hooks such as `useBasket()`.

### Testing

`TDD` Testing from the start generates confidence, furthermore, integrating them in the built process assures that you only deploy working code. Test can run locally using `yarn test` command, which trigger the `jest` tool in watch mode, further instructions appear in your terminal. Finally, we are using `React testing library` as default for this repo.

### Cloud Native

This project is using the following services from `AWS`

  * `S3` Buckets
  * `IAM` for Travis and Admin users
  * `Certificate Manager` for SSL certificates
  * `Route 53` for DNS and URL redirecting

### React

The front-end is built using  [React](https://reactjs.org/ "React"), with [Typescript](https://www.typescriptlang.org/ "Fully typed"), [Styled-components](https://styled-components.com/) and with some utility classes form  [YARN](https://github.com/adidas/adidas-yarn-design-system/tree/master/example/components "Adidas Design System").


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Openy [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

## Upcoming work

  * Fix `CI/CD` Travis bug
  * Deploy Docker Images and `docker-compose` for better developer experience
  * Better integration with [YARN](https://github.com/adidas/adidas-yarn-design-system/tree/master/example/components "Adidas Design System") 
  * Improve overall UI
  * Create a `express` server to Proxy queries to solve current `CORS` issue both in `Dev` and in `Production`.
 
